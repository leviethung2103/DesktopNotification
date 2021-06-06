$(document).ready(function () {
    $(document).on('DOMContentLoaded', function () {
        // Yêu cầu cấp quyền cho phép bật thông báo 

        if (!Notification) {
            console.log('Desktop notifications are not available in your browser.');
            return;
        }
        // Ở trên mình có nói Chromium cung cấp một bộ công cụ JS, Notification chính là một trong những Object như thế 
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    });

    function showNotification() {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        } else {
            // Các options sẽ được hiển thị trên noti
            const options = {
                body: 'Simple Chrome Desktop Notification',
                dir: 'ltr',
                image: 'image.jpg'
            };
            const notification = new Notification('Notification', options);

            notification.onclick = function () {
                // Khi user bấm vào noti thì sẽ được chuyển hướng đến đâu
                window.open('https://www.google.com');
            };
        }
    }

    $('#btn-show-notification').on('click', showNotification);
});