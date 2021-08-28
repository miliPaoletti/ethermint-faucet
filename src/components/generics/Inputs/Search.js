import styled from "styled-components";
import FormControl from "react-bootstrap/FormControl";

const StyledFormControl = styled(FormControl)`
     {
        border-radius: 0.25rem;
        padding-left: 2rem;
        &:focus {
            color: unset;
            border: 1px solid #ced4da;
            outline: 0;
            box-shadow: none;
        }
    }
`;

export const Search = () => {
    return <StyledFormControl type="text" placeholder="Ethermint address" aria-label="ethermint" />;
};
