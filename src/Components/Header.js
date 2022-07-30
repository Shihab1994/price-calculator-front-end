import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


export default function Header() {
    return (
        <main className="content">
        <nav class="navbar navbar-expand-lg bg-light mb-5">
            <div className='container'>
                <a class="navbar-brand">
                    <img className='me-2 font-size' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAMFBMVEUzHHr+/v4qFXf+YllNKHp7NG/pWl2nQ2hWQ5HNUGLm5O9wYKKpn8ePgra/uNXRzOEWp3APAAAD+0lEQVR4nO2a3XarIBCFyQRFUPH93/bIoEZ0qLZCLs7a30VXa1C288dAqhQAAAAAAAAAAAAAAAAAAAAAAAAAAPgzRLT9/GGQuh5UBVLd6Cc3+aFX2dlJNcba1tpG5wdVgdQ4vVbcqMXZSZv2vWKbb0qk3r32uFEatZPHEuXXqKJviLL8MAw+SvVH+5C2LKu1xhgbpTbfUuhZUq8poHv+c0rtQ5o1GR0ShJRuWK75ikK2n9tSY56fHT6d9e2cOqfLtxTSGNR0+5lIh4wZ9peCwYxKB7Vf8TJ1s7ncId6jwv5jr2Aue7w1KGxr64sO7o52oC5xsiyFZdd2MhtwOE/Cjl9NyEoEZ9Ls+FZXFjhKBgxO3gu3goMDGeFFmULNEwiud8vvwcOyDlvbxxxrozQF9Ztp2cPiskEmY9qyAntx7s8nQaAcavlPvivQ5MpJKrCGrwsKnBcguXvQT5qKki4epHIVMqxtHgoskiRc8KVXtbmbb/JjmVmMo7Pl7lNmuOILS5LhRfzvyCtdYJ7PXxXqvXI2uTtEgryI/0pgd+xbluvJUmcyS51Jkjjc4pNR3PG0DztvL3omrHTu81cr2eHULPhDQMcu/OFayJ6ZTi/p03bLCH3LYp79hemQKNJtv1c4cGeV9KJ8Lcmd9jRVNE9yjePFfdzxOAAXpthSf+yl/evQxJJ+H1pqatrz9NEd24h3mYUwFojX2FFEjS41xDbbey65YUDYNZm3ZB42fcy5uCUosjWlboq7zrHv+3Fgue6YN9Fi79Y0jW7ink5037QlSoEE2SZXwyvFn9983RhvtFL95fTnqlAkQT7P7fxO3tTLh0PNXqLJnI/0S/zmivvfJY7euZdzfuhCLsjv3hjbBsLpkZIHxXqtggnLno3wgcHMcsLWyN0BhfZpGUP9KFl6S5Qanex68Dcnrc0+fx0zh5sXBy31uuZmRd8oYeTlZVwpPgsQO5BitNdNEseaLCOp11Uw12sUL2uZZlxqbEqyrFEXzz+dL61369DhHxubotw5tlpaDOkTE9ZsrteifQtw6lIEFSHK5E68iV1Fl43Qp9CtAHQZF24tTLVEiW3LVQD6TBLsWphdY1OUWwE4HvvFjX0LM1VJFPukwiSbTKpRr3mGqyWEM1SsMGmPL25EH+prbnz9ka8w+lA/y9drfd4bnfXll7hT+PK7FAxDuhWA2Qoj1M/TRvSZPvNoiZNOYcomir4bgE5o9TKnMEu9LqLwVgBml7jcKQyH7FBC370vjrJdSuZ8SR1PUZ4w7yuvtzmjfJwYFGasP5fN/pGujdjJXQ3qcyGfu5m6cm3XnQf94f8pKn8XBQAAAAAAAAAAAAAAAAAAAAAAAADwX/IPPlwcHoWV8d0AAAAASUVORK5CYII=" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    &nbsp;Assesment </a>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active ms-5" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Product</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                        </li>
                    </ul>
                </div>


                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

            </div>
        </nav>
        </main>
    )
}
