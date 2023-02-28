import React from "react";
import Container from "../atoms/Container";

function Footer() {
    return (
        <Container>
            <footer className="Footer">
                <p>
                    © {new Date().getFullYear()},{" "}
                    <a href="https://ollyevans.xyz" target="_blank" rel="noreferrer noopener">Olly Evans</a>
                </p>
            </footer>
        </Container>
    );
}

export default Footer;