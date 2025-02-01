import { bannerHTML, helpHTML, socialsHTML } from "./scripts/command-outputs.mjs"
import { asciBanners, renderText, wolfAscii } from "./scripts/generateBannerUtils.mjs"
import { Swiper } from './scripts/swiper.mjs'

const termInput = document.querySelector("#term-input")
const termContent = document.querySelector("#stiff-term__content")
const termInterface = document.querySelector("#term-interface")
const socialOptions = {
    ids: ["linkedin-link", "github-link", "twitter-link"]
}

function initialze() {
    // always autofocus on the terminal input
    document.addEventListener("click", (e) => {
        e.preventDefault()
        if (termInput) {
            termInput.focus()
        }
    })

    // generate the wolf, name ascii art and banner description
    renderText(wolfAscii, asciBanners[0]).then(() => {
        asciBanners[1].classList.remove("hidden")
        document.querySelector(".banner-description").classList.remove("hidden")
    })

    termInput.addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.keyCode === 13) {
            executeCommand(e.target.value.toLowerCase().trim())
        }
    });
}

if (termInput && termContent) {
    initialze()
}

function getCurrentTermInput(command) {
    return document.querySelector("#term-host").outerHTML + ` <span id="term-input" class="text-xs md:text-base">${command}</span>\n`
}

function scrollToBottom() {
    const main = document.querySelector("main")
    main.scrollTop = main.scrollHeight
}

function executeCommand(input) {
    const commands = {
        clear: () => {
            termContent.innerHTML = ""
            scrollToBottom()
            console.log("terminal cleared")
        },
        help: () => {
            appendHtmlToTerm("help", helpHTML)
            scrollToBottom()
        },
        banner: () => {
            appendHtmlToTerm("banner", bannerHTML)

            const asciiBannersLocal = document.querySelectorAll(".ascii-banner")
            renderText(wolfAscii, asciiBannersLocal[asciiBannersLocal.length - 2]).then(() => {
                asciiBannersLocal[asciiBannersLocal.length - 1].classList.remove("hidden")
                document.querySelector(".banner-description.hidden").classList.remove("hidden")
                scrollToBottom()
            })
        },
        projects: () => {
            termContent.innerHTML += "<p class='basic-term-glow text-xs md:text-base'>Redirecting...</p>"
            window.location.href = `${window.location.href}/projects`
            scrollToBottom()
        },
        about: () => {
            termContent.innerHTML += "<p class='basic-term-glow text-xs md:text-base'>Redirecting...</p>"
            window.location.href = `${window.location.href}/about`
            scrollToBottom()
        },
        socials: () => {
            appendHtmlToTerm(input, socialsHTML)
            scrollToBottom()
            enableVimSelection(socialOptions)
        }
    }

    if (commands?.[input]) {
        commands[input]()
    } else {
        const noCommandHtml = "<p class='basic-term-glow text-xs md:text-base'>No command found</p>"
        appendHtmlToTerm(input, noCommandHtml)
        scrollToBottom()
    }

    termInput.value = ""
}

function enableVimSelection(options) {
    let selectedIndex = 0
    let optionIds = options.ids
    highlightSelected(optionIds[selectedIndex])

    termInput.disabled = true
    termInterface.classList.add("hidden")

    document.addEventListener("keydown", vimCursor)
    document.querySelectorAll(".social-link").forEach(socialLink => socialLink.addEventListener("click", handleSocialLink))

    function vimCursor(e) {
        if (e.ctrlKey && e.key === "Enter") {
            stopVimSelection()
        }

        if ((e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "j" || e.key === "l") && selectedIndex + 1 === optionIds.length) {
            highlightSelected("social-link-exit")
            selectedIndex++
        }

        if ((e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "j" || e.key === "l") && selectedIndex + 1 < optionIds.length) {
            highlightSelected(optionIds[++selectedIndex])
        } else if ((e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "k" || e.key === "h") && selectedIndex - 1 >= 0) {
            highlightSelected(optionIds[--selectedIndex])
        }
    }

    function stopVimSelection() {
        const selectedLink = document.getElementById(options.ids[selectedIndex])
        if (selectedLink) window.open(selectedLink.href, "_blank").focus()

        termInput.disabled = false
        termInterface.classList.remove("hidden")
        termInput.focus()
        scrollToBottom()

        document.querySelectorAll(".social-link").forEach(link => {
            link.removeEventListener("click", handleSocialLink)
            link.id = ""
            link.classList.remove("social-link")
        })

        document.removeEventListener("keydown", vimCursor)
    }

    function handleSocialLink(e) {
        selectedIndex = optionIds.length
        if (e.target.id === "social-link-exit") {
            highlightSelected(e.target.id)
            return stopVimSelection()
        }

        window.open(e.target.href, '_blank')
        highlightSelected(e.target.id)
        stopVimSelection()
    }
}


function highlightSelected(id) {
    document.querySelectorAll(".vim-highlight").forEach(el => el.classList.remove("vim-highlight"))

    const el = document.querySelector("#" + id)
    el.classList.add("vim-highlight")
}

function appendHtmlToTerm(command, HTML) {
    termContent.insertAdjacentHTML("beforeend", getCurrentTermInput(command) + HTML)
}

new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

