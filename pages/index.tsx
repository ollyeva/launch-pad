import {Inter} from '@next/font/google'
import Layout from "../layouts";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, minmax(25%, auto));
  width: 400px;
  max-width: 100%;
`

const Card = styled.a`
  padding: 1rem 1.2rem;
  background-color: ${(props) => props.theme.colours.black};
  border: 1px solid ${(props) => props.theme.colours.grey};

  &:hover {
    background-color: ${(props) => props.theme.colours.grey};
  }

  span {
    display: inline-block;
  }

  h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
    color: ${props => props.theme.colours.white}
  }

  p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 30ch;
    color: ${props => props.theme.colours.white}
  }

`

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Layout>
            <Grid>
                <Card
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Find in-depth information about Next.js features and&nbsp;API.
                    </p>
                </Card>
                <Card
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Learn about Next.js in an interactive course with&nbsp;quizzes!
                    </p>
                </Card>
                <Card
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Discover and deploy boilerplate example Next.js&nbsp;projects.
                    </p>
                </Card>
                <Card
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Instantly deploy your Next.js site to a shareable URL
                        with&nbsp;Vercel.
                    </p>
                </Card>
            </Grid>
        </Layout>
    )
}
