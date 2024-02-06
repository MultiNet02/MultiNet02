const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
<div align="center"> 
</div>
   <a href="https://github.com/MultiNet02" target="_blank"><img alt="MultiNet02" src="https://badges.pufler.dev/visits/MultiNet02/MultiNet02?logo=GitHub&label=visits&color=success&logoColor=white&style=flat-square"/></a>  
</div>

- 🕵️ My research interests include but not limited to: Graph Neural Network, Embodied AI, SLAM, Muiltimodal LLM, Quantitative Trading.
- 🦸 I am also passionate about reading about cognitive science, memory mechanisms and philosophy, especially Schopenhauer and Deleuze.
- 👀 If you are interested in languages learning, Viaja a través de paisajes or Viel Spaß beim Lesen von Gedichten，feel free to join in [Slack Team](). Let's make a soul mate be found possible in our short lifetime.
- 🌐 Checkout [my homepage](https://haozhexie.com/about) and [Google Scholar](https://scholar.google.com/citations?user=b3EiE-IAAAAJ) for more information.

![](https://github-readme-stats.vercel.app/api?username=MultiNet02&show_icons=true&theme=synthwave)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=MultiNet02&layout=compact)](https://github.com/anuraghazra/github-readme-stats)
\
`

console.log(readme)
