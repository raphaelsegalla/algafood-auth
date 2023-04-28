
const config = {
  mercadoBitcoinBadgerUrl: "https://www.mercadobitcoin.net/api/BADGER/ticker",
  mercadoBitcoinLooksUrl: "https://www.mercadobitcoin.net/api/LOOKS/ticker",
  mercadoBitcoinBtcUrl: "https://www.mercadobitcoin.net/api/BTC/ticker",
  mercadoBitcoinEthUrl: "https://www.mercadobitcoin.net/api/ETH/ticker",
  mercadoBitcoinSolUrl: "https://www.mercadobitcoin.net/api/SOL/ticker",
  mercadoBitcoinLinkUrl: "https://www.mercadobitcoin.net/api/LINK/ticker",
  mercadoBitcoinMaticUrl: "https://www.mercadobitcoin.net/api/MATIC/ticker",
  mercadoBitcoinSnxUrl: "https://www.mercadobitcoin.net/api/SNX/ticker",
  mercadoBitcoinDydxUrl: "https://www.mercadobitcoin.net/api/DYDX/ticker",
  mercadoBitcoinIlvUrl: "https://www.mercadobitcoin.net/api/ILV/ticker",
  mercadoBitcoinAaveUrl: "https://www.mercadobitcoin.net/api/AAVE/ticker",
  mercadoBitcoinLdoUrl: "https://www.mercadobitcoin.net/api/LDO/ticker",
  mercadoBitcoinAvaxUrl: "https://www.mercadobitcoin.net/api/AVAX/ticker",
  mercadoBitcoinManaUrl: "https://www.mercadobitcoin.net/api/MANA/ticker",
  mercadoBitcoinGalaUrl: "https://www.mercadobitcoin.net/api/Gala/ticker",
  mercadoBitcoinEnjUrl: "https://www.mercadobitcoin.net/api/ENJ/ticker",
  mercadoBitcoinSushiUrl: "https://www.mercadobitcoin.net/api/SUSHI/ticker",
  mercadoBitcoinUniUrl: "https://www.mercadobitcoin.net/api/UNI/ticker",
  mercadoBitcoinSlpUrl: "https://www.mercadobitcoin.net/api/SLP/ticker",
  mercadoBitcoinAtomUrl: "https://www.mercadobitcoin.net/api/ATOM/ticker",
  mercadoBitcoinImxUrl: "https://www.mercadobitcoin.net/api/IMX/ticker",
  mercadoBitcoinOpUrl: "https://www.mercadobitcoin.net/api/OP/ticker",
  mercadoBitcoinCrvUrl: "https://www.mercadobitcoin.net/api/CRV/ticker",
  mercadoBitcoinAliceUrl: "https://www.mercadobitcoin.net/api/ALICE/ticker",
  mercadoBitcoinStxUrl: "https://www.mercadobitcoin.net/api/STX/ticker",
  mercadoBitcoinArbUrl: "https://www.mercadobitcoin.net/api/ARB/ticker"
};

function criarTabela(conteudo) {
  var tabela = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody=document.createElement("tbody");
  var thd=function(i){return (i==0)?"th":"td";};
  for (var i=0;i<conteudo.length;i++) {
    var tr = document.createElement("tr");
    for(var o=0;o<conteudo[i].length;o++){
      var t = document.createElement(thd(i));
      var texto=document.createTextNode(conteudo[i][o]);
      t.appendChild(texto);
      tr.appendChild(t);
    }
    (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
  }
  tabela.appendChild(thead);
  tabela.appendChild(tbody);
  return tabela;
}

function consultaBadger() {

    var BADGER;

    $.ajax({
        url: config.mercadoBitcoinBadgerUrl,
        async: false,
        type: "get",

        success: function(response) {
          BADGER = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });
    return BADGER.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaLooks() {

    var LOOKS;

    $.ajax({
        url: config.mercadoBitcoinLooksUrl,
        async: false,
        type: "get",

        success: function(response) {
          LOOKS = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return LOOKS.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaBtc() {

    var BTC;

    $.ajax({
        url: config.mercadoBitcoinBtcUrl,
        async: false,
        type: "get",

        success: function(response) {
          BTC = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return BTC.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaEth() {

    var ETH;

    $.ajax({
        url: config.mercadoBitcoinEthUrl,
        async: false,
        type: "get",

        success: function(response) {
          ETH = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return ETH.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaSol() {

    var SOL;

    $.ajax({
        url: config.mercadoBitcoinSolUrl,
        async: false,
        type: "get",

        success: function(response) {
          SOL = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return SOL.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaLink() {

    var LINK;

    $.ajax({
        url: config.mercadoBitcoinLinkUrl,
        async: false,
        type: "get",

        success: function(response) {
          LINK = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return LINK.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaMatic() {

    var MATIC;

    $.ajax({
        url: config.mercadoBitcoinMaticUrl,
        async: false,
        type: "get",

        success: function(response) {
          MATIC = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return MATIC.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaSnx() {

    var SNX;

    $.ajax({
        url: config.mercadoBitcoinSnxUrl,
        async: false,
        type: "get",

        success: function(response) {
          SNX = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return SNX.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaDydx() {

    var DYDX;

    $.ajax({
        url: config.mercadoBitcoinDydxUrl,
        async: false,
        type: "get",

        success: function(response) {
          DYDX = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return DYDX.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaIlv() {

    var ILV;

    $.ajax({
        url: config.mercadoBitcoinIlvUrl,
        async: false,
        type: "get",

        success: function(response) {
          ILV = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return ILV.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaAave() {

    var AAVE;

    $.ajax({
        url: config.mercadoBitcoinAaveUrl,
        async: false,
        type: "get",

        success: function(response) {
          AAVE = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return AAVE.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaLdo() {

    var LDO;

    $.ajax({
        url: config.mercadoBitcoinLdoUrl,
        async: false,
        type: "get",

        success: function(response) {
          LDO = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return LDO.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaAvax() {

    var AVAX;

    $.ajax({
        url: config.mercadoBitcoinAvaxUrl,
        async: false,
        type: "get",

        success: function(response) {
          AVAX = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return AVAX.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaMana() {

    var MANA;

    $.ajax({
        url: config.mercadoBitcoinManaUrl,
        async: false,
        type: "get",

        success: function(response) {
          MANA = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return MANA.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaGala() {

    var GALA;

    $.ajax({
        url: config.mercadoBitcoinGalaUrl,
        async: false,
        type: "get",

        success: function(response) {
          GALA = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return GALA.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaEnj() {

    var ENJ;

    $.ajax({
        url: config.mercadoBitcoinEnjUrl,
        async: false,
        type: "get",

        success: function(response) {
          ENJ = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return ENJ.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaSushi() {

    var SUSHI;

    $.ajax({
        url: config.mercadoBitcoinSushiUrl,
        async: false,
        type: "get",

        success: function(response) {
          SUSHI = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return SUSHI.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaUni() {

    var UNI;

    $.ajax({
        url: config.mercadoBitcoinUniUrl,
        async: false,
        type: "get",

        success: function(response) {
          UNI = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return UNI.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaSlp() {

    var SLP;

    $.ajax({
        url: config.mercadoBitcoinSlpUrl,
        async: false,
        type: "get",

        success: function(response) {
          SLP = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return SLP.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaAtom() {

    var ATOM;

    $.ajax({
        url: config.mercadoBitcoinAtomUrl,
        async: false,
        type: "get",

        success: function(response) {
          ATOM = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return ATOM.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaImx() {

    var IMX;

    $.ajax({
        url: config.mercadoBitcoinImxUrl,
        async: false,
        type: "get",

        success: function(response) {
          IMX = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return IMX.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaOp() {

    var OP;

    $.ajax({
        url: config.mercadoBitcoinOpUrl,
        async: false,
        type: "get",

        success: function(response) {
          OP = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return OP.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaCrv() {

    var CRV;

    $.ajax({
        url: config.mercadoBitcoinCrvUrl,
        async: false,
        type: "get",

        success: function(response) {
          CRV = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return CRV.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaAlice() {

    var ALICE;

    $.ajax({
        url: config.mercadoBitcoinAliceUrl,
        async: false,
        type: "get",

        success: function(response) {
          ALICE = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return ALICE.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaStx() {

    var STX;

    $.ajax({
        url: config.mercadoBitcoinStxUrl,
        async: false,
        type: "get",

        success: function(response) {
          STX = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return STX.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultaArb() {

    var ARB;

    $.ajax({
        url: config.mercadoBitcoinArbUrl,
        async: false,
        type: "get",

        success: function(response) {
          ARB = JSON.parse(response.ticker.last);
        },

        error: function(error) {
          alert("Erro ao consultar recurso");
        }
    });

    return ARB.toLocaleString('pt-br', {minimumFractionDigits: 6});
}

function consultar() {
  document.getElementById("resultado").appendChild(criarTabela([
      ["Moeda", "valor"],
      ["BADGER",  consultaBadger()],
      ["LOOKS",  consultaLooks()],
      ["BTC",  consultaBtc()],
      ["ETH",  consultaEth()],
      ["SOL",  consultaSol()],
      ["LINK",  consultaLink()],
      ["MATIC",  consultaMatic()],
      ["SNX",  consultaSnx()],
      ["DYDX",  consultaDydx()],
      ["ILV",  consultaIlv()],
      ["AAVE",  consultaAave()],
      ["LDO",  consultaLdo()],
      ["AVAX",  consultaAvax()],
      ["MANA",  consultaMana()],
      ["GALA",  consultaGala()],
      ["ENJ",  consultaEnj()],
      ["SUSHI",  consultaSushi()],
      ["UNI",  consultaUni()],
      ["SLP",  consultaSlp()],
      ["ATOM",  consultaAtom()],
      ["IMX",  consultaImx()],
      ["OP",  consultaOp()],
      ["CRV",  consultaCrv()],
      ["ALICE",  consultaAlice()],
      ["STX",  consultaStx()],
      ["ARB",  consultaArb()]
    ]));
}

$("#btn-consultar").click(consultar);