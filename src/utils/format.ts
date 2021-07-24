class FormatString {
    term: string;

    constructor(term: string) {
        this.term = term;
    }

    removeLastSpaceOfString(): string {
        return this.term.trim();
    }
}

export default FormatString;
