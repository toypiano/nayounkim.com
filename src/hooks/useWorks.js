import { useState, useEffect } from 'react'
import 'firebase/firestore'
import firebase from 'gatsby-plugin-firebase'

export const useWorks = allMarkdownRemark => {
  const initialWorks = allMarkdownRemark.edges.map(
    ({ node: { frontmatter } }) => ({
      fluid: frontmatter.featuredImage?.childImageSharp.fluid,
      title: frontmatter.title,
      slug: frontmatter.slug,
      likes: 0,
    })
  )

  const [works, setWorks] = useState(initialWorks)

  function updateWorks(querySnapshot) {
    const updatingWorks = works.map(work => ({ ...work })) // deep-copy works
    // Update works state with existing work from db
    querySnapshot.forEach(doc => {
      console.log({ id: doc.id, data: doc.data() })
      const { title, likes } = doc.data()

      const matchingWorkIndex = updatingWorks.findIndex(
        updatingWork => updatingWork.title === title
      )
      // If work exists in db, manually update matching property from works state.
      if (matchingWorkIndex >= 0) {
        updatingWorks[matchingWorkIndex].likes = likes
        updatingWorks[matchingWorkIndex].id = doc.id
      }
    })

    setWorks(updatingWorks)
  }

  useEffect(() => {
    firebase.firestore().collection('likes:test').get().then(updateWorks)
  }, [])

  const toggleLike = async work => {
    const itemKey = 'like:' + work.title
    const liked =
      window?.localStorage.getItem(itemKey) === 'true' ? true : false
    const db = firebase.firestore()

    if (liked) {
      window?.localStorage.setItem(itemKey, 'false')
      await db
        .collection('likes:test')
        .doc(work.id)
        .set(
          {
            likes: firebase.firestore.FieldValue.increment(-1),
            title: work.title,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        )
    } else {
      window?.localStorage.setItem(itemKey, 'true')
      await db
        .collection('likes:test')
        .doc(work.id)
        .set(
          {
            likes: firebase.firestore.FieldValue.increment(1),
            title: work.title,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        )
    }

    await db.collection('likes:test').get().then(updateWorks)
  }

  return [works, toggleLike]
}
