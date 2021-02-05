import { useState, useEffect } from 'react'
import 'firebase/firestore'
import firebase from 'gatsby-plugin-firebase'

export const useWorks = allMarkdownRemark => {
  const [works, setWorks] = useState([])

  /**
   * // sync works with the db in place
   * @param {*} works works to sync in place
   * @param {*} querySnapshot firestore querySnapshot
   */
  function syncWorks(works, querySnapshot) {
    querySnapshot.forEach(doc => {
      const { title, likes } = doc.data()
      if (!title || typeof likes === 'undefined') return // skip invalid document

      const matchingWorkIndex = works.findIndex(
        newWork => newWork.title === title
      )
      // If work exists in db, manually update likes and id from works state.
      if (matchingWorkIndex >= 0) {
        works[matchingWorkIndex].likes = likes
        works[matchingWorkIndex].id = doc.id
      }
    })
  }

  /**
   * Initialize works state on mount
   * @param {*} querySnapshot from fireStore
   * @param {*} allMarkdownRemark from gatsby graphql
   */
  function initWorks(querySnapshot) {
    const initialWorks = allMarkdownRemark.edges.map(
      ({ node: { frontmatter } }) => {
        let initialLiked = false
        if (window) {
          initialLiked =
            window.localStorage.getItem('like:' + frontmatter.title) === 'true'
              ? true
              : false
        }

        return {
          fluid: frontmatter.featuredImage?.childImageSharp.fluid,
          title: frontmatter.title,
          slug: frontmatter.slug,
          likes: 0,
          liked: initialLiked,
        }
      }
    )

    syncWorks(initialWorks, querySnapshot)
    setWorks(initialWorks)
  }

  function updateWorks(querySnapshot, liked, likedTitle) {
    const newWorks = works.map(work => ({ ...work })) // deep-copy works

    // update liked state of the toggled work
    const likedWorkIndex = newWorks.findIndex(
      newWork => newWork.title === likedTitle
    )
    newWorks[likedWorkIndex].liked = liked

    syncWorks(newWorks, querySnapshot)
    setWorks(newWorks)
  }

  useEffect(() => {
    firebase.firestore().collection('likes').get().then(initWorks)
  }, [])

  const toggleLike = async work => {
    const itemKey = 'like:' + work.title
    const liked =
      window?.localStorage.getItem(itemKey) === 'true' ? true : false
    const db = firebase.firestore()

    if (liked) {
      window?.localStorage.setItem(itemKey, 'false')
      await db
        .collection('likes')
        .doc(work.id)
        .set(
          {
            likes: firebase.firestore.FieldValue.increment(-1),
            title: work.title,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        )
      await db
        .collection('likes')
        .get()
        .then(querySnapshot => updateWorks(querySnapshot, false, work.title))
    } else {
      window?.localStorage.setItem(itemKey, 'true')
      await db
        .collection('likes')
        .doc(work.id)
        .set(
          {
            likes: firebase.firestore.FieldValue.increment(1),
            title: work.title,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        )
      await db
        .collection('likes')
        .get()
        .then(querySnapshot => updateWorks(querySnapshot, true, work.title))
    }
  }

  return [works, toggleLike]
}
