document.querySelector("#submit").addEventListener("click", (e) => {
  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "51966044085";

  let cliente = document.querySelector("#cliente").value;
  let pedido = document.querySelector("#pedido").value;
  let lugar = document.querySelector("#lugar").value;
  let pago = document.querySelector("#pago").value;
  let resp = document.querySelector("#respuesta");

  let url = `https://api.whatsapp.com/send?phone=51966044085&text=
		*_Mis Gustitos_*%0A
		*Pedidos*%0A%0A
		*Nombre:*%0A
		${cliente}%0A
		*Ingresa tu pedido:*%0A
		${pedido}%0A
		*Sitio/Piso:*%0A
		${lugar}%0A
		*¿Con cuanto cancelas?*%0A
		${pago}%0A
		`;

  if (cliente === "" || pedido === "" || lugar === "" || pago === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, por favor rellene todos los campos`;
  } else {
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu pedido, ${cliente}`;
    window.open(url);
  }
});
