function superbowlWin(arrayOfObjects) {
    const e = arrayOfObjects.find(
        obj => obj.result === "W"
    );
    if (e) {
        return e.year
    };
}
