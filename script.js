(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.innerHTML = 'Loading...'
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          console.log(posts)
          let html = '<div class="posts">'
          posts.forEach(p => {
            html += `<div class="post">
                        <h3>${p.title}</h3>
                        <p>${p.body}</p>
                        <div class="meta">ID: ${p.id} | userId: ${p.userId}</div>
                     </div>`
          })
          html += '</div>'
          answer.innerHTML = html
        })
        .catch(err => {
          answer.innerHTML = 'Błąd: ' + err
        })
    }, 1000)
  })

  cw2.addEventListener("click", function () {
    answer.innerHTML = 'Loading...'
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(p => {
          console.log(p)
          let html = '<div class="posts">'
          html += `<div class="post">
                      <h3>${p.title}</h3>
                      <p>${p.body}</p>
                      <div class="meta">ID: ${p.id} | userId: ${p.userId}</div>
                   </div>`
          html += '</div>'
          answer.innerHTML = html
        })
      .catch(err => {
        answer.innerHTML = 'Błąd: ' + err
      })
    }, 1000)
  })

  cw3.addEventListener("click", function () {
    answer.innerHTML = 'Processing…'
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        title: 'Nowy post',
        body: 'Treść',
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        answer.innerHTML = `Dodano nowy post o ID = ${data.id}`
      })
      .catch(err => {
        answer.innerHTML = 'Blad: ' + err
      })
  })

})();