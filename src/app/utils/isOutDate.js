function isOutDate(date) {
    if (Date.now() - date > 10 * 60 * 10) {
        return true;
    }
    return false;
}

export default isOutDate;
