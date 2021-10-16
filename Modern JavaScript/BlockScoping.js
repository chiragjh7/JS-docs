function blockScoping() {
    let cnt = 0;
    console.log(cnt);
}
cnt = 5;

blockScoping();
console.log(cnt);