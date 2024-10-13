import { bannerHTML, helpHTML } from "./scripts/command-outputs.mjs"
import { asciBanners, renderText, wolfAscii } from "./scripts/generateBannerUtils.mjs"

const termInput = document.querySelector("#term-input")
const termContent = document.querySelector("#stiff-term__content")

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
        if (e.code === "Enter") {
            executeCommand(e.target.value.toLowerCase())
        }
    });
}

if(termInput && termContent){
    initialze()
}

function getCurrentTermInput(command) {
    return document.querySelector("#term-host").outerHTML + ` <span class="text-xs md:text-base">${command}</span>\n`
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
            termContent.insertAdjacentHTML("beforeend", getCurrentTermInput("help") + helpHTML)
            scrollToBottom()
        },
        banner: () => {
            termContent.insertAdjacentHTML("beforeend", getCurrentTermInput("banner") + bannerHTML)

            const asciiBannersLocal = document.querySelectorAll(".ascii-banner")
            renderText(wolfAscii, asciiBannersLocal[asciiBannersLocal.length - 2]).then(() => {
                asciiBannersLocal[asciiBannersLocal.length - 1].classList.remove("hidden")
                document.querySelector(".banner-description.hidden").classList.remove("hidden")
                scrollToBottom()
            })
        },
        projects: () => {
            termContent.innerHTML += "<p class='text-xs md:text-base'>Redirecting...</p>"
            window.location.replace(`${window.location.href}/projects`)
            scrollToBottom()
        }
    }
    if (commands?.[input]) {
        commands[input]()
    } else {
        termContent.insertAdjacentHTML("beforeend", getCurrentTermInput(input) + "<p class='text-xs md:text-base'>No command found</p>")
    }
    termInput.value = ""
}
