const responses ={
	"hello":"Chào bạn",	
"hi":" Chào bạn",
"xin chào":"chào bạn",
"Hôm Nay Mày thấy nào":"Hôm nay như cứt",
"Shop bán cái gì":"Chúng tôi bán những dịch vụ đáp ứng nhu cầu khách hàng ví dụ như card điện thoại Mobile,Viettel các gamepass,yêu cầu của khách hàng là sự ưu tiên hàng đầu",
"Cảm ơn bạn":"Chúng tôi rất vui khi bạn đã chọn web chúng tôi để giao dịch sự hài lòng của bạn là món quà to lớn của chúng tôi",
"Virtuex là gì?":"Virtuex là một nền tảng cung cấp các giải pháp tối ưu trong lĩnh vực [thêm ngành/ngành nghề bạn đang phục vụ]. Chúng tôi cam kết mang lại những sản phẩm/dịch vụ chất lượng cao, giúp khách hàng đạt được mục tiêu của mình một cách hiệu quả nhất.",
"Virtuex cung cấp những dịch vụ gì?":"Chúng tôi cung cấp các dịch vụ bao gồm [liệt kê dịch vụ, ví dụ: thiết kế website, marketing trực tuyến, tư vấn công nghệ,...]. Để biết thêm chi tiết, bạn có thể tham khảo phần Dịch vụ trên website của chúng tôi."





};

document.getElementById('chatbot-toggle-btn').addEventListener('click', toggleChatbot);
document.getElementById('close-btn').addEventListener('click', toggleChatbot);
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('user', userInput);
        respondToUser(userInput.toLowerCase());
        document.getElementById('user-input').value = '';
    }
}

function respondToUser(userInput) {
    const response = responses[userInput] || responses["default"];
    setTimeout(function() {
        appendMessage('bot', response);
    }, 500);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    if (sender === 'bot' && message === responses["default"]) {
        const buttonYes = document.createElement('button');
        buttonYes.textContent = '✔ Yes';
        buttonYes.onclick = function() {
            appendMessage('bot', responses["expert"]);
        };
        const buttonNo = document.createElement('button');
        buttonNo.textContent = '✖ No';
        buttonNo.onclick = function() {
            appendMessage('bot', responses["no"]);
        };
const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(buttonYes);
        buttonContainer.appendChild(buttonNo);
        chatBox.appendChild(buttonContainer);
    }
}