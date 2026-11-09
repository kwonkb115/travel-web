const introMessage = document.querySelector('#intro-message');

function changeword() {
    introMessage.textContent = '제 취미는 러닝이고 제 페이스는 455입니다.';
    document.getElementById('mock-overlay').classList.add('show');
}

document.getElementById('mock-overlay').addEventListener('click', function() {
    this.classList.remove('show');
});
