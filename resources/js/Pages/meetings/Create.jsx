import Layout from "@/Layouts/AuthenticatedLayout";

import { useForm } from "@inertiajs/react";


const Create = ({auth}) => {

    const { data, setData, errors, post } = useForm({
      created_by: auth.user.id,
      name_long: "",
      room: "",
      notes: "",
      date: "",
      time_start: "",
      time_end: "",
    });

    function submit(e) {
      e.preventDefault();
      post(route("meetings.store"), {
        preserveScroll: true,

      });
    }


    return (
      <>
        <div className="container">
          <article>
            <header>
              Dodaj novi sastanak
            </header>
            <form  onSubmit={(e) => submit(e)}>
              <input
                type="text"
                name="name_long"
                id="name_long"
                placeholder="naslov"
                required
                onChange={(e) => setData("name_long", e.target.value)}

              />
              <input
                type="text"
                name="room"
                id="room"
                placeholder="soba"
                onChange={(e) => setData("room", e.target.value)}

              />
              <div className="grid">
                <input
                  type="text"
                  name="time_start"
                  id="time_start"
                  defaultValue="07:00"
                  min="07:00"
                  max="22:00"
                  onChange={(e) => setData("time_start", e.target.value)}
                  
                  />
                <input type="date" name="date" id="date" 
                  onChange={(e) => setData("date", e.target.value)}
                  
                  />
              </div>

              <textarea
                name="notes"
                id="notes"
                cols="30"
                onChange={(e) => setData("notes", e.target.value)}

                placeholder="kratki opis"
              ></textarea>
              <input type="submit" value="SPREMI" />
            </form>
          </article>
        </div>
      </>
    );
  };
Create.layout = (page) => <Layout children={page} />;

export default Create;
