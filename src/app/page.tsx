import Cover from "@/component/cover/cover";
import DiscoverApex from "@/component/discover-apex/discover-apex";
import Footer from "@/component/footer/footer";
import Header from "@/component/header/header";
import Property from "@/component/property/property";
import TableDetail from "@/component/table-detail/table";
import Top from "@/component/top/top";

export default function Home() {
  return (
    <main>
      <section id="section1">
        <Header></Header>
        <Top></Top>
      </section>
      <section id="section2">
        {<DiscoverApex></DiscoverApex>}
      </section>
      <section id="section3">
        {<Property></Property>}
      </section>
      <section id="section4">
        {<TableDetail></TableDetail>}
      </section>
      <section id="section6">
        {<Cover></Cover>}
      </section>
      <section id="section6">
        {<Footer></Footer>}
      </section>
    </main>
  );
}
