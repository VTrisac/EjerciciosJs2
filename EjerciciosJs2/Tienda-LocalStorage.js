TProductos=new Array();
TPrecios=new Array();

TProductos[1]="Samsung Galaxy TAB S2 9.7''";
TProductos[2]="AMD ATHLON 5350";
TProductos[3]="Monitor Acer B196Lymdr";
TProductos[4]="Monitor LG 22M47VQ-P";
TProductos[5]="Intel Solid-State Drive DC S3610";
TProductos[6]="Toshiba Folio 100";
TProductos[7]="Airis OnePad";
TProductos[8]="Point of View Mobii";
TProductos[9]="Blackberry Tablet PlayBook";
TProductos[10]="Archos 7";
TProductos[11]="HTC Flyer";
TProductos[12]="Motorola XOOM";
//Tabla que almacenará los productos que aparecen en la hoja de pedido

TPrecios[1]="449";
TPrecios[2]="52,10";
TPrecios[3]="154,70";
TPrecios[5]="118,89";
TPrecios[6]="308,40";
TPrecios[7]="219";
TPrecios[8]="349";
TPrecios[9]="499";
TPrecios[10]="199";
TPrecios[11]="529";
TPrecios[12]="569";
//Tabla que alamacenará el precio de cada producto por unidad

Lista="";

function rellenar(Nump, Uni)
{
var Producto="";     //Almacenará el nombre del producto
var Total=0;         //TPrecio producto por Unidades
var nombre="Factura";
var valor="";
var Precio="";

Uni=parseInt(Uni);   //Pasamos la variable a númerica
Producto= TProductos[Nump]; //Almacenamos el nombre del producto
Precio=TPrecios[Nump];

Lista+=Producto+";"+Uni+";"+Precio+";";
//Montamos un string separado por puntos y coma que contendrá todos 
//los producto seleccionados
alert("Producto añadido a la factura!!!");


}

function Abrir_Factura()
{
localStorage.setItem("Listacompra", Lista);    
window.open("ControlFactura-LocalStorage.html", "Factura");
}
