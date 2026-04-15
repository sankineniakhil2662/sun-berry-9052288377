import InternshipHero from "./sections/InternshipProgramsHero"
import {Internship_Hero} from "./InternshipPrograms.data"

const InternshipProgramsPage = () => {
  return (
    <main className="bg-bg">
      <InternshipHero data={Internship_Hero}/>
    </main>
  )
}

export default InternshipProgramsPage
