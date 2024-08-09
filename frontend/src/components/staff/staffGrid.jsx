import Staff from "@/components/staff/staff";
import { fetchStrapi, host } from "lib/fetchStrapi";

export default async function StaffGrid() {
  const path = "/staffs";
  const urlParamsObject = {
    populate: {
      staff: {
        populate: "*",
      },
    },
  };
  const fetchedData = await fetchStrapi(path, urlParamsObject);
  const data = fetchedData.data;
  const staffArray = data[0].attributes.staff.map((staffMember) => {
    return {
      name: staffMember.name,
      position: staffMember.position,
      bio: staffMember.bio[0].children[0].text,
      headshot: `${host}${staffMember.headshot.data.attributes.url}`,
    };
  });
  return (
    <div id="container" className="grid grid-cols-1 llg:grid-cols-2 gap-16">
      {staffArray.map((member) => (
        <Staff
          key={`${member.name}`}
          name={member.name}
          position={member.position}
          bio={member.bio}
          headshot={member.headshot}
        />
      ))}
    </div>
  );
}
