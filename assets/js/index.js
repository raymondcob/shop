$(document).ready(function(){
    loadProducts();
    
    $("#frm_new_prod").submit(function(e){
        e.preventDefault();
        insertProduct();    
        
    });
    
    function insertProduct(){
        let data=$("#frm_new_prod").serialize();
        $.post("assets/php/insert.php",data,function(server_response){
            if(server_response==1){
                loadProducts();
                
                
            }else{
                alert("Insert was unsusccessful");
            }
        });
        
    }
});



function loadProducts(){
    $.get("assets/php/get_products.php", {}, function(json){
        
        let response = JSON.parse(json);
        
        let html = "<table id='mytable' class='table table-bordered table-striped table-hover'>";
        html += "<thead>";
        html += "<tr>";
        html += "<td>ID</td>";
        html += "<td>Product</td>";
        html += "<td>Description</td>";
        html += "<td>Quantity</td>";
        html += "<td>Image</td>";
        html += "<td>Price</td>";
        html += "<td>Total</td>";
        html += "</tr>";
        html += "</thead>";
        
        for(let i = 0; i < response.length; i++){
            html += "<tr>";
            html += "<td>"+response[i].id+"</td>";
            html += "<td>"+response[i].name+"</td>";
            html += "<td>"+response[i].desc+"</td>";
            html += "<td>"+response[i].quantity+"</td>";
            html += "<td><img src='"+response[i].image+"' width='50px'></td>";
            html += "<td>"+"$ "+response[i].price+"</td>";
            html += "<td>"+"$ "+response[i].price*response[i].quantity+"</td>";
            html += "</tr>";
            
        }
        
        html += "</table>";
        $("#div_table_cont").html(html);
        $('#mytable').DataTable();
    })
}