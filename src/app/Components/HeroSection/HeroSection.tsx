import Description from "./Description"
import '../Cosmetics/HeroSection/HeroSection.css'
import HeroCards from "./HeroCards"
function HeroSection() {
    return (
        <>
            <div className="page-renders">
                <Description
                    mainHeading={"Great outcomes"}
                    sideHeading={"start with"}
                    brandHeading={"Jira"}
                    tagLine={" The only project management tool you need to plan and track work across every team."}
                />
                <HeroCards />
            </div>
        </>
    )
}

export default HeroSection