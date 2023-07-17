import { gql } from "@apollo/client"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Queries: {
    getExperience: gql`
      query GetExperience {
        resumes {
          badge
          desc
          experience
          id
          logo {
            url
          }
          subTitle
          title
        }
      }
    `,

    getSkills: gql`
      query GetSkills {
        skills {
          id
          knowledge
          backEnd {
            field
            id
            value
          }
          frontEnd {
            field
            id
            value
          }
          languages {
            field
            id
            value
          }
        }
      }
    `,
  },
}
