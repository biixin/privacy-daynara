// 🔥 JAVASCRIPT CORRIGIDO PARA ANDROID

const AVATAR_URL = "https://yasmin-botpro.s3.us-east-2.amazonaws.com/foto+normal.png"

const demoItems = [
  {
    id: "img-1",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 45,
    mediaType: "video",
    src: "https://yasmin-botpro.s3.us-east-2.amazonaws.com/1-c.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb01.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-2",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 48,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/2.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb2.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-3",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/3.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb3.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-4",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/5.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb5.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-5",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/11.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb11.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-6",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/12.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb12.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-7",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/16.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb16.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-8",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/17.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb17.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-9",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/18.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb18.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-10",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/20.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb20.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-11",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/26.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb26.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-12",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/27.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb27.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-13",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/28.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb28.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-14",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/29.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb29.png",
    text: "Conteúdo exclusivo 🔒",
  },
  {
    id: "img-15",
    userName: "daynarasilva",
    handle: "@daynarasilva",
    minutesAgo: 55,
    mediaType: "video",
    src: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/30.mp4",
    thumb: "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/thumb30.png",
    text: "Conteúdo exclusivo 🔒",
  }

]

// 🔥 VARIÁVEIS GLOBAIS SIMPLES
let currentTab = "mural"
let navigationHistory = ["mural"]
let selectedTipValue = 500 // Para gorjetas do Ao Vivo

// 🔥 VARIÁVEIS PARA TOUCH DETECTION
let touchStartX = 0
let touchStartY = 0
let touchStartTime = 0
let isTouchMove = false

// 🔥 VARIÁVEIS PARA AO VIVO
const videoCallSimulator = null

// 🔥 INICIALIZAÇÃO
function INICIALIZAR_APP() {
  console.log("[v0] 🚀 Inicializando app...")

  // Verificar se elementos essenciais existem
  const elementos = ["mural-content", "trending-content", "aovivo-content", "tab-mural", "tab-trending", "tab-aovivo"]

  const elementosFaltando = elementos.filter((id) => !document.getElementById(id))

  if (elementosFaltando.length > 0) {
    console.error("[v0] ❌ Elementos faltando:", elementosFaltando)
    return
  }

  console.log("[v0] ✅ Todos os elementos encontrados, carregando mural...")
  CARREGAR_MURAL()
}

document.addEventListener("DOMContentLoaded", INICIALIZAR_APP)

function populateFeed() {
  console.log("📱 Populando feed...")
  const container = document.getElementById("mural-content")
  container.innerHTML = ""

  demoItems.forEach((item, index) => {
    const card = createCard(item, index)
    container.appendChild(card)
  })
}

function createCard(item, index) {
  const card = document.createElement("article")
  card.className =
    "group bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-102 transition-all duration-500 hover:border-white/20 animate-in"
  card.style.animationDelay = index * 100 + "ms"

  // ALTERAÇÃO: Adicionar thumbnail para vídeos
  card.innerHTML = `
        <header class="flex items-center gap-4 p-5 bg-gradient-to-r from-white/5 to-transparent">
            <div class="w-12 h-12 rounded-2xl border-2 border-white/20 shadow-lg relative overflow-hidden bg-cover bg-center" style="background-image: url('${AVATAR_URL}')">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div class="flex-1">
                <div class="text-white font-bold text-lg">${item.userName}</div>
                <div class="text-gray-400 text-sm font-medium">${item.handle}</div>
            </div>
            <div class="text-gray-400 text-xs font-medium">${String(item.minutesAgo).padStart(2, "0")}:${String(Math.floor(Math.random() * 60)).padStart(2, "0")}</div>
            <button class="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
            </button>
        </header>
        
        <div class="relative w-full bg-gradient-to-br from-gray-800 to-gray-900 media-clickable group-hover:scale-101 transition-transform duration-500 overflow-hidden" style="padding-top: 125%" data-item-id="${item.id}">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
            ${
              item.mediaType === "image"
                ? `<img src="${item.src}" alt="Post de ${item.userName}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">`
                : `
                 <!-- Thumbnail do vídeo -->
                 <img src="${item.thumb}" alt="Thumbnail do vídeo" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                 
                 <!-- Botão de play overlay -->
                 <div class="absolute inset-0 flex items-center justify-center">
                     <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                         <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="1.5"></circle> <path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>
                     </div>
                 </div>
                 
                 <!-- Badge de vídeo -->
                 <div class="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                     ▶️ Vídeo
                 </div>`
            }
        </div>
        
        <footer class="p-5 bg-gradient-to-r from-transparent to-white/5">
            <div class="text-sm text-gray-400 font-medium leading-relaxed">
                ${item.text ? `<span>${item.text} </span>` : ""}
                <a href="#" class="text-orange-500 hover:text-orange-400 no-underline font-semibold transition-colors duration-300">@daynarasilva</a>
            </div>
        </footer>
    `

  // ALTERAÇÃO: Adicionar data-src para vídeos
  if (item.mediaType === "video") {
    const mediaElement = card.querySelector(".media-clickable")
    if (mediaElement) {
      mediaElement.setAttribute("data-src", item.src)
    }
  }

  // 🔥 ADICIONAR TOUCH EVENTS PARA DETECTAR SCROLL VS CLICK
  const mediaElement = card.querySelector(".media-clickable")
  if (mediaElement) {
    mediaElement.addEventListener("touchstart", handleTouchStart, { passive: true })
    mediaElement.addEventListener("touchmove", handleTouchMove, { passive: true })
    mediaElement.addEventListener("touchend", handleTouchEnd, { passive: false })
  }

  return card
}

// 🔥 TOUCH HANDLERS PARA DIFERENCIAR SCROLL DE CLICK
function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
  touchStartTime = Date.now()
  isTouchMove = false
}

function handleTouchMove(e) {
  if (!isTouchMove) {
    const touchX = e.touches[0].clientX
    const touchY = e.touches[0].clientY
    const deltaX = Math.abs(touchX - touchStartX)
    const deltaY = Math.abs(touchY - touchStartY)

    // Se moveu mais de 10px, é scroll
    if (deltaX > 10 || deltaY > 10) {
      isTouchMove = true
    }
  }
}

function handleTouchEnd(e) {
  const touchEndTime = Date.now()
  const touchDuration = touchEndTime - touchStartTime

  // Só abre modal se:
  // 1. Não houve movimento (não é scroll)
  // 2. Duração do toque foi menor que 500ms (não é long press)
  if (!isTouchMove && touchDuration < 500) {
    e.preventDefault()
    const itemId = e.currentTarget.dataset.itemId
    if (itemId) {
      console.log("🎯 CLIQUE REAL DETECTADO:", itemId)
      ABRIR_MODAL(itemId)
    }
  }

  // Reset
  isTouchMove = false
}

// 🔥 FUNÇÃO PRINCIPAL - MUDAR TAB (sem chat)
function MUDAR_TAB(tab) {
  console.log("[v0] 🔄 MUDANDO TAB:", tab)

  if (!tab) {
    console.error("[v0] ❌ Tab não definida!")
    return
  }

  currentTab = tab

  const muralContent = document.getElementById("mural-content")
  const trendingContent = document.getElementById("trending-content")
  const aovivoContent = document.getElementById("aovivo-content")

  if (!muralContent || !trendingContent || !aovivoContent) {
    console.error("[v0] ❌ Elementos de conteúdo não encontrados!")
    return
  }

  if (tab === "mural") {
    history.pushState({ tab: "mural" }, "", "#mural")
    navigationHistory = ["mural"]
  } else if (tab === "trending") {
    history.pushState({ tab: "trending" }, "", "#trending")
    navigationHistory.push("trending")
  } else if (tab === "aovivo") {
    history.pushState({ tab: "aovivo" }, "", "#aovivo")
    navigationHistory.push("aovivo")
  }

  console.log("[v0] 📱 Escondendo todos os conteúdos...")

  // Esconder tudo
  muralContent.classList.add("hidden")
  trendingContent.classList.add("hidden")
  aovivoContent.classList.add("hidden")

  console.log("[v0] 📱 Mostrando conteúdo:", tab + "-content")

  // Mostrar o tab selecionado
  document.getElementById(tab + "-content").classList.remove("hidden")

  // Atualizar botões
  const tabs = ["mural", "trending", "aovivo"]
  tabs.forEach((t) => {
    const btn = document.getElementById("tab-" + t)
    if (btn) {
      if (t === tab) {
        btn.className =
          "clickable flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-300 text-white bg-gradient-to-br from-purple-600 to-pink-600 shadow-xl shadow-purple-600/25 scale-105"
      } else {
        btn.className =
          "clickable flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-300 text-gray-400 hover:bg-white/10 hover:text-white hover:scale-105"
      }
    }
  })

  if (tab === "aovivo") {
    console.log("[v0] 📹 Iniciando ao vivo...")
    INICIAR_AO_VIVO()
  } else if (tab === "mural") {
    console.log("[v0] 🏠 Populando feed...")
    populateFeed()
  }

  console.log("[v0] ✅ Tab alterada com sucesso para:", tab)
}

function INICIAR_AO_VIVO() {
  console.log("📹 Iniciando Ao Vivo...")

  if (localStorage.getItem("aoVivoAssistido") === "true") {
    console.log("🔄 Usuário já assistiu ao vivo, redirecionando para gorjetas...")
    // Pular direto para seção de gorjetas/pagamento
    MOSTRAR_SECAO_GORJETA()
    return
  }

  // Mostrar tela de loading
  document.getElementById("loadingScreen").style.display = "flex"

  // Configurar botão de entrada
  const joinButton = document.getElementById("joinButton")
  if (joinButton) {
    joinButton.onclick = () => {
      document.getElementById("loadingScreen").style.display = "none"
      document.getElementById("videoCallInterface").style.display = "block"

      setTimeout(() => {
        SIMULAR_VIDEOCHAMADA()
      }, 1000)
    }
  }
}

function SIMULAR_VIDEOCHAMADA() {
  console.log("🎥 Simulando videochamada...")

  const mainVideo = document.getElementById("mainVideo")
  const cameraStatus = document.getElementById("cameraStatus")

  if (mainVideo && cameraStatus) {
    cameraStatus.innerHTML = `
      <div class="icon">
        <div class="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
      </div>
      <div class="text text-white font-semibold">Conectando com a live...</div>
      <div class="text-sm text-gray-400 mt-2">Carregando vídeo completo</div>
    `

    mainVideo.src = "https://yasmin-privacy.s3.sa-east-1.amazonaws.com/chamada+7s.mp4"
    mainVideo.preload = "auto"

    // Aguardar carregamento completo do vídeo
    mainVideo.addEventListener("canplaythrough", () => {
      console.log("📹 Vídeo carregado completamente")

      setTimeout(() => {
        cameraStatus.style.display = "none"
        mainVideo.style.display = "block"
        mainVideo.play().catch(console.error)

        INICIAR_CONTADOR_VISUALIZACOES()

        // Quando vídeo terminar, mostrar gorjetas e marcar como visto
        mainVideo.addEventListener("ended", () => {
          localStorage.setItem("aoVivoAssistido", "true")
          setTimeout(() => {
            MOSTRAR_SECAO_GORJETA()
          }, 2000)
        })
      }, 2000)
    })

    // Fallback se o vídeo não carregar em 10 segundos
    setTimeout(() => {
      if (mainVideo.style.display === "none") {
        console.log("⚠️ Fallback: forçando início do vídeo")
        cameraStatus.style.display = "none"
        mainVideo.style.display = "block"
        mainVideo.play().catch(console.error)
        INICIAR_CONTADOR_VISUALIZACOES()
      }
    }, 10000)
  }
}

function INICIAR_CONTADOR_VISUALIZACOES() {
  const viewersNumber = document.getElementById("viewersNumber")
  if (!viewersNumber) return

  let currentViewers = Math.floor(Math.random() * 15) + 25 // Entre 25-40 inicialmente

  const updateViewers = () => {
    // Variação aleatória entre -3 e +5
    const change = Math.floor(Math.random() * 9) - 3
    currentViewers = Math.max(20, Math.min(65, currentViewers + change))
    viewersNumber.textContent = currentViewers
  }

  // Atualizar a cada 3-8 segundos
  const interval = setInterval(updateViewers, Math.random() * 5000 + 3000)

  // Parar quando sair da live
  setTimeout(() => clearInterval(interval), 300000) // 5 minutos max
}

/*
function INICIAR_COMENTARIOS_AUTOMATICOS() {
  const comentarios = [
    "Que delícia de mulher! 😍",
    "Nossa, que gostosa!",
    "Você é perfeita, Carol! ❤️",
    "Que corpo maravilhoso!",
    "Continua assim, princesa!",
    "Que mulher sensual! 🔥",
    "Você é um sonho, amor!",
    "Que deusa! 😘",
  ]

  const nomes = ["João", "Pedro", "Carlos", "Rafael", "Bruno", "André", "Lucas", "Felipe"]

  setInterval(() => {
    const comentario = comentarios[Math.floor(Math.random() * comentarios.length)]
    const nome = nomes[Math.floor(Math.random() * nomes.length)]

    const chatOverlay = document.getElementById("chatOverlay")
    if (chatOverlay) {
      const messageDiv = document.createElement("div")
      messageDiv.className = "chat-message male-comment"
      messageDiv.innerHTML = `<strong>${nome}:</strong> ${comentario}`

      chatOverlay.appendChild(messageDiv)

      // Remover após 8 segundos
      setTimeout(() => {
        if (messageDiv.parentNode) {
          messageDiv.parentNode.removeChild(messageDiv)
        }
      }, 8000)
    }
  }, 4000)
}
*/

function MOSTRAR_SECAO_GORJETA() {
  console.log("💰 Mostrando seção de gorjeta...")
  document.getElementById("tipSection").style.display = "flex"
}

function SELECIONAR_VALOR(valor) {
  selectedTipValue = valor

  // Remover seleção anterior
  document.querySelectorAll(".tip-btn").forEach((btn) => {
    btn.classList.remove("selected")
  })

  // Adicionar seleção atual
  document.querySelector(`[data-value="${valor}"]`).classList.add("selected")

  console.log("💰 Valor selecionado:", valor)
}

// 🔥 VOLTAR AO MURAL
function VOLTAR_MURAL() {
  console.log("🔙 VOLTANDO AO MURAL!")

  // Parar qualquer vídeo que esteja rodando
  const mainVideo = document.getElementById("mainVideo")
  if (mainVideo) {
    mainVideo.pause()
    mainVideo.currentTime = 0
  }

  // Esconder interfaces do Ao Vivo
  document.getElementById("loadingScreen").style.display = "none"
  document.getElementById("videoCallInterface").style.display = "none"
  document.getElementById("tipSection").style.display = "none"

  MUDAR_TAB("mural")
}

function GERAR_PIX(valor) {
  console.log("💰 Gerando PIX para valor:", valor)

  console.log("[v0] Seção atual:", currentTab)
  console.log("[v0] Modal PIX será exibido com z-index máximo")

  // Mostrar loading
  document.getElementById("loading-pix").style.display = "flex"

  const pushinpayToken = "46587|yxFwauxIDyhqPoTno5I6dmaF5hYm7NtTKdvdtPjb0c9099b4"

  const requestBody = {
    value: valor,
    name: "Customer" + Date.now(),
    id: "live-payment-" + Date.now(),
  }

  console.log("[v0] Enviando requisição PIX:", requestBody)

  fetch("https://api.pushinpay.com.br/api/pix/cashIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${pushinpayToken}`,
      "Accept": "application/json"
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      console.log("[v0] Resposta PIX status:", response.status)
      return response.json()
    })
    .then((data) => {
      console.log("[v0] Dados PIX recebidos:", data)
      document.getElementById("loading-pix").style.display = "none"

      if (data.qr_code || data.qrcode || data.pix_code) {
        const pixCode = data.qr_code || data.qrcode || data.pix_code
        document.getElementById("pix-code").value = pixCode
        document.getElementById("pix-title").textContent = `PIX R$ ${(valor / 100).toFixed(2)}`
        document.getElementById("pix-description").textContent = "Copie o código PIX abaixo e cole no seu banco:"

        const pixModal = document.getElementById("pix-modal")
        pixModal.style.display = "flex"
        pixModal.style.zIndex = "999999"
        console.log("[v0] Modal PIX exibido com z-index:", pixModal.style.zIndex)
      } else {
        console.error("[v0] Erro: dados PIX inválidos", data)
        alert("Erro ao gerar PIX. Tente novamente.")
      }
    })
    .catch((error) => {
      console.error("[v0] Erro na requisição PIX:", error)
      document.getElementById("loading-pix").style.display = "none"
      alert("Erro ao gerar PIX. Verifique sua conexão e tente novamente.")
    })
}

function COPIAR_PIX() {
  const pixCode = document.getElementById("pix-code")
  pixCode.select()
  pixCode.setSelectionRange(0, 99999)
  document.execCommand("copy")

  alert("Código PIX copiado!")
}

function FECHAR_PIX() {
  document.getElementById("pix-modal").style.display = "none"
}

function FECHAR_MODAL() {
  console.log("❌ FECHANDO MODAL")

  const modal = document.getElementById("media-modal")
  if (modal) {
    // ALTERAÇÃO: Pausar o vídeo e remover src para liberar recursos
    const video = modal.querySelector("video")
    if (video) {
      video.pause()
      video.currentTime = 0
      video.removeAttribute("src") // Remover src para liberar recursos
      video.load() // Forçar descarregamento
    }
    
    modal.style.display = "none"
  }
}

function ABRIR_MODAL(itemId) {
  console.log("🖼️ ABRINDO MODAL:", itemId)

  const item = demoItems.find((i) => i.id === itemId)
  if (!item) return

  history.pushState({ modal: true, itemId: itemId }, "", window.location.href)

  const modal = document.getElementById("media-modal")
  const modalContent = document.getElementById("modal-content")

  if (modal && modalContent) {
    modalContent.innerHTML = ""

    if (item.mediaType === "video") {
      // Criar vídeo apenas quando o modal for aberto
      const video = document.createElement("video")
      video.controls = true
      video.autoplay = true
      video.style.maxWidth = "100%"
      video.style.maxHeight = "100%"
      video.setAttribute("playsinline", "true")
      
      // Encontrar o elemento que contém o data-src
      const cardElement = document.querySelector(`[data-item-id="${itemId}"]`)
      if (cardElement) {
        const videoSrc = cardElement.getAttribute("data-src") || item.src
        video.src = videoSrc
        console.log("🎥 Carregando vídeo:", videoSrc)
      }
      
      modalContent.appendChild(video)
    } else {
      const img = document.createElement("img")
      img.src = item.src
      img.style.maxWidth = "100%"
      img.style.maxHeight = "100%"
      modalContent.appendChild(img)
    }

    modal.style.display = "flex"
  }
}


window.addEventListener("popstate", (event) => {
  console.log("🔙 Botão voltar pressionado!", event.state)

  const modal = document.getElementById("media-modal")
  if (modal && modal.style.display === "flex") {
    FECHAR_MODAL()
    return
  }

  if (currentTab === "aovivo" && document.getElementById("videoCallInterface").style.display === "block") {
    if (confirm("Deseja sair da videochamada?")) {
      VOLTAR_MURAL()
    } else {
      // Impedir saída
      history.pushState({ tab: "aovivo" }, "", "#aovivo")
    }
    return
  }

  // Navegação normal entre tabs
  if (event.state && event.state.tab) {
    MUDAR_TAB(event.state.tab)
  } else {
    MUDAR_TAB("mural")
  }
})

function CARREGAR_MURAL() {
  console.log("[v0] 🏠 Carregando mural...")

  const muralContent = document.getElementById("mural-content")
  const trendingContent = document.getElementById("trending-content")
  const aovivoContent = document.getElementById("aovivo-content")

  if (!muralContent || !trendingContent || !aovivoContent) {
    console.error("[v0] ❌ Elementos não encontrados no DOM!")
    return
  }

  muralContent.classList.remove("hidden")
  trendingContent.classList.add("hidden")
  aovivoContent.classList.add("hidden")

  // Atualizar botões
  const tabs = ["mural", "trending", "aovivo"]
  tabs.forEach((t) => {
    const btn = document.getElementById("tab-" + t)
    if (t === "mural") {
      btn.className =
        "clickable flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-300 text-white bg-gradient-to-br from-purple-600 to-pink-600 shadow-xl shadow-purple-600/25 scale-105"
    } else {
      btn.className =
        "clickable flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-300 text-gray-400 hover:bg-white/10 hover:text-white hover:scale-105"
    }
  })

  populateFeed()
}

document.addEventListener('DOMContentLoaded', function() {
    const previewVideo = document.getElementById('preview-video');
    
    if (previewVideo) {
        // Carregar o vídeo apenas quando o usuário interagir
        previewVideo.addEventListener('click', function() {
            if (!this.src && this.getAttribute('data-src')) {
                this.src = this.getAttribute('data-src');
                console.log('🎥 Carregando vídeo preview:', this.src);
            }
        });
        
        // Também carregar quando tentar dar play
        previewVideo.addEventListener('play', function() {
            if (!this.src && this.getAttribute('data-src')) {
                this.src = this.getAttribute('data-src');
                console.log('🎥 Carregando vídeo preview para play:', this.src);
            }
        });
    }
});
