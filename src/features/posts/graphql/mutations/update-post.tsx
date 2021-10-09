import { gql, useMutation } from "@apollo/client";

const MUTATION = gql`
    mutation updatePost($formData: UpdatePostInput!, $id: ID!) {
        updatePost(input: $formData, id: $id) {
            id
            title
            body
        }
    }
`;

const updatePost = () => {
    return useMutation(MUTATION);
};

export default updatePost;