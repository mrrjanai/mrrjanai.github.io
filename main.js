(function () {
  var list = document.getElementById('projects')
  var projects = window.PROJECTS || []

  function el(tag, cls, text) {
    var n = document.createElement(tag)
    if (cls) n.className = cls
    if (text != null) n.textContent = text
    return n
  }

  projects.forEach(function (p, i) {
    var card = el('article', 'project')
    card.id = p.slug || 'project-' + (i + 1)

    if (p.image) {
      var shot = el('a', 'shot')
      var primary = (p.links || [])[0]
      shot.href = primary ? primary.href : '#'
      shot.setAttribute('aria-label', 'Open ' + p.name)
      var img = el('img')
      img.src = p.image
      img.alt = p.imageAlt || p.name + ' screenshot'
      img.loading = i === 0 ? 'eager' : 'lazy'
      shot.appendChild(img)
      card.appendChild(shot)
    }

    var body = el('div', 'project-body')
    var meta = el('p', 'project-meta')
    meta.textContent = String(i + 1).padStart(2, '0') + (p.year ? ' · ' + p.year : '')
    body.appendChild(meta)
    body.appendChild(el('h3', null, p.name))
    body.appendChild(el('p', 'tagline', p.tagline))
    body.appendChild(el('p', 'summary', p.summary))

    if (p.highlights && p.highlights.length) {
      var ul = el('ul', 'highlights')
      p.highlights.forEach(function (h) { ul.appendChild(el('li', null, h)) })
      body.appendChild(ul)
    }

    if (p.stack && p.stack.length) {
      var stack = el('ul', 'stack')
      stack.setAttribute('aria-label', 'Built with')
      p.stack.forEach(function (s) { stack.appendChild(el('li', null, s)) })
      body.appendChild(stack)
    }

    if (p.links && p.links.length) {
      var links = el('div', 'project-links')
      p.links.forEach(function (l, j) {
        var a = el('a', j === 0 ? 'btn btn-solid' : 'btn', l.label + ' ↗')
        a.href = l.href
        a.target = '_blank'
        a.rel = 'noopener'
        if (l.note) a.title = l.note
        links.appendChild(a)
      })
      body.appendChild(links)
    }

    card.appendChild(body)
    list.appendChild(card)
  })

  var count = document.getElementById('project-count')
  if (count) count.textContent = projects.length + (projects.length === 1 ? ' project' : ' projects')
  var year = document.getElementById('year')
  if (year) year.textContent = new Date().getFullYear()
})()
