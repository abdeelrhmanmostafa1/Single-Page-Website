// تحديد النموذج (Form) من الصفحة
const orderForm = document.querySelector('form');

// إضافة حدث عند الضغط على زر الإرسال
orderForm.addEventListener('submit', function(e) {
    e.preventDefault(); // منع الصفحة من إعادة التحميل

    // الحصول على اسم العميل من الخانة الأولى
    const customerName = document.querySelector('input[type="text"]').value;

    // إظهار رسالة نجاح (ممكن تطورها لـ Modal لاحقاً)
    alert(`شكراً يا ${customerName}! تم استلام طلبك بنجاح، وسيتواصل معك مندوبنا قريباً.`);

    // مسح البيانات من الخانات بعد الإرسال
    orderForm.reset();
});