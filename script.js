var moreButtons = document.querySelectorAll('.myBtn');

for (i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener('click', function (e) {
        var dots = this.parentElement.querySelector("#dots");
        var moreText = this.parentElement.querySelector("#more");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            this.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            this.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    });
}
