import React from "react";
import Link from 'next/link'
import Container from "../atoms/Container";

function Header() {
    return (
        <Container>
            <header className="Header">
                <h1>
                    <Link href="/">Launch Pad</Link>
                </h1>
            </header>
        </Container>
    );
}

export default Header;