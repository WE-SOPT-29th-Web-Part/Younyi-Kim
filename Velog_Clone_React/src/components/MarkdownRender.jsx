import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const markdown = `
    # Heading

    **bold**

    *italic*
`;
const MarkdownRender = () => {
    return (
        <MarkdownStyle>
            <ReactMarkdown>{markdown}</ReactMarkdown>          
        </MarkdownStyle>
    )
}


export default MarkdownRender

const MarkdownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`;