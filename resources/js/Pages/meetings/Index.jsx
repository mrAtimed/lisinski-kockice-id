import { Link } from "@inertiajs/react";
import { highlightText } from "@/Utilities/TextHighlighter";

import Layout from "@/Layouts/AuthenticatedLayout";
import Paginate from "@/Components/ui/Paginate";
import Search from "@/Components/ui/Search";
import BtnCreate from "@/Components/btns/BtnCreate";
import moment from "moment";

const Index = ({ auth, meetings }) => {
  return (
    <>
      <Search data={meetings}></Search>
      {meetings && (
        <div>
          {meetings.data.map((item) => (
            <article key={item.id}>
              <header>
                <Link
                  style={{ gridColumn: "span 3" }}
                  href={route("meetings.show", item.id)}
                >
                  #
                  {highlightText(
                    item.name_long,
                    route().params.q
                  )}
                </Link>
              </header>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "20ch" }}></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      DATUM
                    </td>
                    <td>
                      {moment(item.date).format("DD.MM.YYYY")}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      VRIJEME
                    </td>
                    <td>
                      {item.time_start}
                      {item.time_end && ` - ${item.time_end}`}
                    </td>
                  </tr> 
                  
                  {
                    item.notes &&
                   <tr>
                    <td>
                      NAPOMENE
                    </td>
                    <td>
                      {highlightText(item.notes, route().params.q)}
                    </td>
                  </tr>
                  }
                </tbody>
              </table>
            </article>
          ))}

          <Paginate
            prev={meetings.prev_page_url}
            links={meetings.links}
            next={meetings.next_page_url}
          ></Paginate>
        </div>
      )}
    </>
  );
};
Index.layout = (page) => (
  <Layout
    children={page}
    title="Sastanci"
    btn={
      <li>

        <BtnCreate href="meetings.create"></BtnCreate>
      </li>

    }
  />
);

export default Index;
