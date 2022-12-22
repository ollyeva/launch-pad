export const convertToSlug = (Text: string) => {
    return (
        "/" +
        Text.toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-")
    )
}

export const convertToClass = (Text: string) => {
    return (
        Text.toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-")
    )
}

export const formatPhoneString = (Text: string) => {
    return Text.toLowerCase()
        .replace(/[\s.]+/g, "")
}