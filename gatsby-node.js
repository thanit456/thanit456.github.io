exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const paragraphs = [
    {
      _id: 1,
      title: "How can computer see?",
      content: "using Machine Learning such as CNN",
    },
    {
      _id: 2,
      title: "What's the big open-source of NLP?",
      content:
        "Hugging-face provides many models for NLP tasks in multilingual",
    },
  ]

  paragraphs.forEach(paragraph => {
    createPage({
      path: `/paragraph/${paragraph._id}`,
      component: require.resolve(`./src/templates/paragraph-template.js`),
      context: { paragraph },
    })
  })
}
