import { useState, useEffect } from 'react'
import 'firebase/firestore'
import firebase from 'gatsby-plugin-firebase'

export const useWorks = allMarkdownRemark => {
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

  const [works, setWorks] = useState(initialWorks)

  function updateWorks(querySnapshot, liked, likedTitle) {
    const newWorks = works.map(work => ({ ...work })) // deep-copy works

    if (likedTitle) {
      // update liked state of the toggled work
      const likedWorkIndex = newWorks.findIndex(
        newWork => newWork.title === likedTitle
      )
      newWorks[likedWorkIndex].liked = liked
    }

    // sync works with the db
    querySnapshot.forEach(doc => {
      const { title, likes } = doc.data()

      const matchingWorkIndex = newWorks.findIndex(
        newWork => newWork.title === title
      )
      // If work exists in db, manually update likes and id from works state.
      if (matchingWorkIndex >= 0) {
        newWorks[matchingWorkIndex].likes = likes
        newWorks[matchingWorkIndex].id = doc.id
      }
    })

    setWorks(newWorks)
  }

  useEffect(() => {
    firebase.firestore().collection('likes').get().then(updateWorks)
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
