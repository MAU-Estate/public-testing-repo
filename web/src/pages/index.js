import React from 'react'
import { graphql, Link } from 'gatsby'

// const IndexPage = ({ location, data: { sanityBio: pageData } }) => (
const IndexPage = ({ location, data: { sanityBio: pageData } }) => {
  return (
    <>
      {/* gallery */}
      <div className="w-full h-screen bg-black-b relative flex justify-center items-center p-24">
        <div className="absolute left-0 right-1/2 top-0 bottom-0 border border-white flex items-center z-10 text-white">
          <div className="p-10">{`<`}</div>
        </div>
        <figure className="w-full max-w-7xl">
          <div className="aspect-w-16 aspect-h-9 border border-white">
            <img
              className="object-contain"
              src="https://via.placeholder.com/480x640"
              alt=""
            />
          </div>
          <figcaption className="mt-c">
            <div className="f-8 text-white">Caption about the photo</div>
          </figcaption>
        </figure>
        <div className="absolute right-0 left-1/2 top-0 bottom-0 flex items-center justify-end border border-white text-white">
          <div className="p-10">{`>`}</div>
        </div>
      </div>

      <section className="container mt-e">
        <div className="grid grid-cols-12 mb-g">
          <div className="col-span-9 mb-a3">
            <img src="https://via.placeholder.com/1115x300" />
          </div>
          <div className="col-start-2 col-span-4 border">
            <p className="f-13">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quis
              eius dolorum hic nam perferendis neque vitae, ipsam illum quasi
              mollitia ducimus laborum temporibus nulla optio aliquid in
              cupiditate maiores.
            </p>
          </div>
          <div className="col-start-6 col-span-4 border">
            <p className="f-13">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus rerum consequuntur iure earum quas, aliquid, laboriosam
              rem provident quisquam harum quae consequatur veritatis vero
              officiis esse. Deleniti, perspiciatis optio? Facere!
            </p>
            <p className="f-13">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus rerum consequuntur iure earum quas, aliquid, laboriosam
              rem provident quisquam harum quae consequatur veritatis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black-b py-g">
        <div className="container">
          <div className="grid grid-cols-12 mb-e">
            <div className="col-span-5 ">
              <div className="border border-white">
                <img src="https:/via.placeholder.com/320x180" alt="" />
              </div>
            </div>
            <div className="col-start-7 col-span-5 text-white">
              <p className="f-14">
                Born in New York City in 1945, Unger was raised in New Jersey
                and received an undergraduate degree from Mt. Holyoke College in
                1967, where she first majored in biochemistry before
                transferring to the studio art program. She received an M.F.A.
                from Columbia University in 1975, where she studied with Ronald
                Bladen and George Sugarman.
              </p>
              <p className="f-14">
                In 1975, Unger moved into a studio loft in New York City’s East
                Village just around the corner from where Jean-Michel Basquait
                would take up studio space in the following decade; a community
                of artists was just beginning to foment there at the time. In
                1980, Unger married photographer Geoffrey Biddle, whom she had
                met while working at the Magnum photographic library when he
                came in for a job interview. The loft space they inhabited was
                barely liveable upon move in, “raw and filthy, where there had
                once been a factory that produced perforated metal balls for
                making tea,” as Biddle wrote. But Unger’s tenacity and ingenuity
                (including running the meter backwards to help lower bills)
                helped make it habitable. The hard fight to make a difficult
                space home was worth it, in Unger’s view, as the 2,000 sq ft
                floor was large enough for her to live and make her increasingly
                massive works. Biddle and Unger’s daughter, the artist and
                Wassaic Project co-founder Eve Biddle, was born in 1982, and the
                loft thereby became home, workspace, nursery, and darkroom
                alike.
              </p>
            </div>
          </div>
        </div>

        {/* Full Gallery */}
        <div className="mb-e">
          <div className="aspect-w-5 aspect-h-3 mb-c">
            <img
              className="object-cover"
              src="https:/via.placeholder.com/1000x600"
              alt=""
            />
          </div>
          <div className="container flex justify-between text-white">
            <div>
              <p className="f-8">
                Mary Ann at the East Village loft<br></br>
                New York, 1975
              </p>
            </div>
            <div className="flex">
              <p className="f-8">Prev | Next</p>
              <p className="ml-20 f-8">1 / 5</p>
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-12">
          <div className="col-start-7 col-span-5 text-white mb-e">
            <p className="f-14">
              Mary Ann’s early sculptures and works on paper establish themes
              and reveal interests seen throughout her career: The combination
              of organic forms with geometric, and a tendency for parts of works
              to rest against, hold, support, carry, or cradle one another.
              These load-bearing works were deceptively simple, but their
              underlying structures were finely engineered. Frequently, the
              pieces required no hardware and instead balanced on one another
              securely thanks to Unger’s meticulous, mathematical construction.
              Her early work was included in exhibitions at PS 1 in 1977 and the
              Aldrich Museum in 1978.
            </p>
          </div>
          <div className="col-start-2 col-span-8 mb-e text-white">
            <blockquote>
              <p className="f-15 mb-f">
                Coming of age in the late 1960s, Unger described her work as
                post-minimalist, combining the serial practices of minimalism
                with an interest in organic form, gender, and the body—issues
                with which, as a 1970s-era feminist, she was deeply engaged.
              </p>
              <cite className="f-16 not-italic">
                Person Name<br></br>
                <span className="text-grey-a">
                  Curator for the re-installation of Across the Bering Strait,
                  2018
                </span>
              </cite>
            </blockquote>
          </div>
        </div>

        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-end-12">
            <img
              className="object-cover mb-c"
              src="https:/via.placeholder.com/1000x600"
              alt=""
            />
            <div className="flex justify-between text-white">
              <div>
                <p className="f-8">
                  Mary Ann at the East Village loft<br></br>
                  New York, 1975
                </p>
              </div>
              <div className="flex">
                <p className="f-8">Prev | Next</p>
                <p className="ml-20 f-8">1 / 5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-g">
        <div className="container grid grid-cols-12">
          <div className="col-start-2 col-end-7">
            <p className="f-14">
              Mary Ann was first diagnosed with breast cancer in 1985, the
              beginning of a long entanglement with the disease that would
              ripple through her life and work until her death. Between the late
              1980s and the mid-1990s, she simultaneously worked on both
              publicly-commissioned artworks and gallery-based solo exhibitions.
              These included Communion at Sculpture Center, NYC, as well as
              shows at the New Jersey State Museum, the Klarfeld Perry, and
              Trans Hudson Galleries. In 1989, she received a Pollock-Krasner
              Foundation grant, and would again in 1995; she was also a resident
              fellow at Yaddo in 1980 and 1994.
            </p>
            <p className="f-14">
              In the late 1980s, her works “Temple” and “Beehive Temple” were
              added to the Philip and Muriel Berman Museum of Art, Ursinus
              College and the Sculpture Gardens at Lehigh University,
              respectively. In 1989, she was commissioned by the City of Tampa
              to create the public artwork “Wave.” Her work “Ode to Tatlin,” was
              commissioned by the Aaron Copland School of Music at Queens
              College in 1991. In 1985, she and Biddle purchased a house in
              upstate NY that became a secondary refuge for her work; here she
              had nature to reflect on and contend with as well as space in
              which to unfurl. Later, she would also spend summers in Mt.
              Desert, Maine, a location that influenced works such as Maine
              Wishing Stones and some works in watercolor that were intriguingly
              different from anything else she made over the course of her
              career.
            </p>
          </div>
          <div className="col-start-8 col-end-13">
            <img
              className="object-cover mb-c"
              src="https:/via.placeholder.com/1000x600"
              alt=""
            />
            <div className="flex justify-between">
              <div>
                <p className="f-8">
                  Mary Ann at the East Village loft<br></br>
                  New York, 1975
                </p>
              </div>
              <div className="flex">
                <p className="f-8">Prev | Next</p>
                <p className="ml-20 f-8">1 / 5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link to="/gallery/placeholder-gallery" state={{ modal: true }}>
        Placeholder Gallery link
      </Link>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    sanityBio {
      seo {
        title
      }
    }
  }
`
