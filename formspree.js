document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("contact-form");
    
    async function handleSubmit(e) {
        e.preventDefault();
        const status = document.getElementById("contact-form-status");
        const data = new FormData(e.target);

        status.innerHTML = "メールを送信中..."

        fetch(e.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if(response.ok) {
            status.innerHTML = "正常に送信されました。お問い合わせありがとうございます。";
            form.reset();
        } else {
            response.json().then(data => {
                if(Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(',')
                } else {
                    status.innerHTML = "送信に失敗しました。"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "送信に失敗しました。"
    })
}

form.addEventListener("submit", handleSubmit);

});