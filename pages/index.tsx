import styled from "styled-components";

const Holder = styled.div`
  margin: 0 1rem;
`

export default function Home() {
    return (
        <Holder>
            <p>Hello noob, here is your basic setup to get you going!</p>
            <p>Some quick links</p>
            <ul>
                <li><a target='_blank' rel='noreferrer noopener'
                       href='https://nextjs.org/docs'>Next</a></li>
                <li><a target='_blank' rel='noreferrer noopener'
                       href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'>R3F</a></li>
                <li><a target='_blank' rel='noreferrer noopener'
                       href='https://github.com/ollyeva?tab=repositories'>Repos</a></li>
            </ul>
        </Holder>
    )
}
