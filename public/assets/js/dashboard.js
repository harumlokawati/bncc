
$(document).ready(function(){
    console.log("cuuk");
});
function toproduct(){
    console.log("to product");
    var company_name = $('#company_name').val();
    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = 'product';
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'company_name';
    input.value = company_name;
    form.appendChild(input);
    form.submit();
}
function todashboard(){
    console.log("to dashboard");
    var company_name = $('#company_name').val();
    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = 'dashboard';
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'company_name';
    input.value = company_name;
    form.appendChild(input);
    form.submit();
}
function tobroadcast(){
    console.log("to broadcast");
    var company_name = $('#company_name').val();
    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = 'broadcast';
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'company_name';
    input.value = company_name;
    form.appendChild(input);
    form.submit();
}
function toemployee(){
    console.log("to employee");
    var company_name = $('#company_name').val();
    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = 'employee';
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'company_name';
    input.value = company_name;
    form.appendChild(input);
    form.submit();
}