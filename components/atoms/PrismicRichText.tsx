import React from 'react';
import PropTypes from "prop-types";
import {RichText} from "prismic-reactjs";
import {linkResolver} from "../../utils/linkResolver";
import Link from 'next/link'

const NextLink = (type: any, element: any, content: any) => {
    if (element.data.link_type === 'Document') {
        return (
            <Link href={linkResolver(element.data)} key={element.data.id}>
                {content}
            </Link>
        )
    }
    return null
}

// @ts-ignore
function PrismicRichText({render}) {
    return (
        <RichText
            render={render}
            serializeHyperlink={NextLink}/>
    )
}

PrismicRichText.propTypes = {
    render: PropTypes.array.isRequired,
};

export default PrismicRichText;