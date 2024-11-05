import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const users = [
  {
    fullname: "Ali Raza",
    email: "ali.raza@example.com",
    location: "Karachi",
    events: ["Tech Meetup", "Startup Expo"],
    profileImage:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    fullname: "Ayesha Khan",
    email: "ayesha.khan@example.com",
    location: "Lahore",
    events: ["Career Fair", "Business Conference"],
    profileImage:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    fullname: "Ahmed Malik",
    email: "ahmed.malik@example.com",
    location: "Islamabad",
    events: ["Developer Summit", "AI Workshop"],
    profileImage:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    fullname: "Sara Qureshi",
    email: "sara.qureshi@example.com",
    location: "Rawalpindi",
    events: ["Marketing Seminar", "Innovation Expo"],
    profileImage:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    fullname: "Usman Sheikh",
    email: "usman.sheikh@example.com",
    location: "Multan",
    events: ["Finance Meetup", "Entrepreneurship Conference"],
    profileImage:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    fullname: "Fatima Ahmed",
    email: "fatima.ahmed@example.com",
    location: "Faisalabad",
    events: ["Health Tech Forum", "Networking Event"],
    profileImage:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
];

export default function Users() {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold p-20 text-center">Users</h1>
      <Table>
        <TableCaption>A list of your recent Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile Image</TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Envents</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((users) => (
            <TableRow key={users.fullname}>
              <TableCell className="text-right">
                <Image
                  src={users.profileImage}
                  height={40}
                  width={40}
                  className="rounded"
                />
              </TableCell>

              <TableCell className="font-medium">{users.fullname}</TableCell>
              <TableCell>{users.email}</TableCell>
              <TableCell>{users.location}</TableCell>
              <TableCell className="text-right">{users.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
 
      </Table>
    </div>
  );
}
