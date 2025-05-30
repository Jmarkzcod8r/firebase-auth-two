import axios from "axios";
import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import { Getuserinfo } from "../functions global/Getuserinfo";
import Image from "next/image";
import Usernav from "./Components/Usernav";
import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Add from "./Icons/Add.svg";
import Copy from "./Icons/Copy.png";
import Save from "./Icons/Save.png";
import shredder from "./Icons/shredder.png";
import Clr from "./Icons/Clear.png";
import Del from "./Icons/Delete.png";
import Hide from "./Icons/hidden.png";
import Out from "./Icons/Out.png";
import Archive from "./Icons/Archive.png";
import Info from "./Icons/info.png";
import Blank from "./Icons/Blank.png";
import Feedback from "./Icons/feedback.png";
import changes from "./Icons/changes.png";
import Bgpic from "./Icons/Bgpic.jpg";
import { ForphotoURL } from "./Components/Usernav";
import { thisbase } from "../functions global/thisbase";
import { list } from "postcss";
import Recent from "./Icons/Recent.png";
import Spreadsheet from "./Icons/spreadsheet.png"

import Ask from "./ask.js";

import Attendance from "./attendance.jsx";



// const currentUrl = window.location.href;
// console.log(currentUrl);



export default function Index() {
  //------------ Declaring Varibles ----------------

  const [photoURL, setPhotoURL] = useState("");
  const [title, setTitle] = useState("");
  // This is the log we will be showing to the main container in the middle.

  const [name, setName] = useState("");
  const [log, setLog] = useState("");
  const [highlight, setHighlight] = useState("");
  const [desc, setDesc] = useState("");
  const [comments, setComments] = useState("");
  const [date, setDate] = useState("");
  const [_id, set_id] = useState("temp id");
  const [mainlist, setMainlist] = useState([]);
  const [credemail, setCredemail] = useState("");
  const [feedback, setFeedback] = useState("temp feedback");
  const [countwords, setCountwords] = useState(0);

  const [selectedButton, setSelectedButton] = useState(false);
  const buttons = ["Button 1", "Button 2", "Button 3"];

  const [archive, setArchive] = useState(false);
  const [showList, setShowList] = useState(true);

  const [isHighlighted, setIsHighlighted] = useState(false);
  const [clientDates, setClientDates] = useState([]);

  const [June, setJune] = useState([]);

  const [searchon, setSearchon] = useState ('')

  const router = useRouter();

  const [updateslist, setUpdateslist] = useState([])

  const [sortedlist, setSortedlist] = useState([])



  var thisbasez = thisbase();

  const api = axios.create({
    // baseURL: "https://firebase-auth-two-new-jmarkzcod8r.vercel.app/api",
    baseURL: thisbasez,
  });

  async function getData() {
    console.log("getting data");
    console.log(".......")
    const data = await api.get(`/clients/${credemail}`);

    console.log("data, ", data);
    const updateslist = data.data.updates;
    console.log('this is data.data.updates:,', data.data.updates)
    const clientslist = data.data.clients;


    setMainlist(clientslist);
    setSortedlist([...clientslist].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 10));
    setUpdateslist(updateslist.reverse())
    console.log('updateslist:', updateslist)
    console.log('mainlist:', clientslist.reverse())
  }
  let emaillist = [];

  let Jandays = [];
  let Febdays = [];
  let Mardays = [];
  let Aprdays = [];
  let Maydays = [];

  let Junedays = [];

  let Juldays = [];
  let Augdays = [];
  let Sepdays = [];
  let Octdays = [];
  let Novdays = [];
  let Decdays = [];

  if (mainlist && updateslist) {
    const arrayOfDates = mainlist
      .map((obj) => new Date(obj.date))
      .filter((date) => date.getFullYear() === 2025);
      console.log('updateslist:,' , updateslist)
      const arrayOfUpdates = updateslist
      .map((update) => new Date(update.date))
      .filter((date) => date.getFullYear() === 2025);

      console.log('array of updates:', arrayOfUpdates)
      console.log('mainlist....:', mainlist)
      const mergedDates = [...arrayOfDates, ...arrayOfUpdates];

      Jandays = mergedDates
        .filter((date) => date.getMonth() === 0)
        .map((date) => date.getDate());
      Febdays = mergedDates
        .filter((date) => date.getMonth() === 1)
        .map((date) => date.getDate());
      Mardays = mergedDates
        .filter((date) => date.getMonth() === 2)
        .map((date) => date.getDate());
      Aprdays = mergedDates
        .filter((date) => date.getMonth() === 3)
        .map((date) => date.getDate());
      Maydays = mergedDates
        .filter((date) => date.getMonth() === 4)
        .map((date) => date.getDate());
      Junedays = mergedDates
        .filter((date) => date.getMonth() === 5)
        .map((date) => date.getDate());
      Juldays = mergedDates
        .filter((date) => date.getMonth() === 6)
        .map((date) => date.getDate());
      Augdays = mergedDates
        .filter((date) => date.getMonth() === 7)
        .map((date) => date.getDate());
      Sepdays = mergedDates
        .filter((date) => date.getMonth() === 8)
        .map((date) => date.getDate());
      Octdays = mergedDates
        .filter((date) => date.getMonth() === 9)
        .map((date) => date.getDate());
      Novdays = mergedDates
        .filter((date) => date.getMonth() === 10)
        .map((date) => date.getDate());
      Decdays = mergedDates
        .filter((date) => date.getMonth() === 11)
        .map((date) => date.getDate());
  }

  const showRecent = () => {
    if (!isSorted) {
      // Store the original list before sorting
      setOrigmainlist([...mainlist]); // Create a copy of mainlist to avoid direct mutation

      // Sort the list by updatedAt and get the top 20 items
      const sortedList = [...mainlist].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      const top10Items = sortedList.slice(0, 10); // Top 10 items

      setMainlist(top10Items); // Update the mainlist with top 10 items
      console.log('Top 20 items:', top10Items);
    } else {
      // Restore the original list
      setMainlist(origmainlist);
      console.log('Original list restored:', origmainlist);
    }

    // Toggle the sorting state
    setIsSorted(!isSorted);
  };

  const [origmainlist, setOrigmainlist] = useState([])
  const [isSorted, setIsSorted] = useState(false); // Flag to track sorting state

  useEffect(() => {
    const ForphotoURL = async () => {
      const userInfo = await Getuserinfo();

      if (userInfo && Array.isArray(userInfo)) {
        const [user] = userInfo;
        if(user){
          setPhotoURL(user.photoURL);
        }
      } else {
        // Handle the case where userInfo is null, undefined, or not an array
        console.error("Invalid userInfo:", userInfo);
      }


    };

    ForphotoURL();
    async function Dbadd() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const data = await api.get(`/clients` + `/` + user.email);
          // if (!searchon) {
            setMainlist(data.data.clients.reverse());
            setUpdateslist(data.data.updates.reverse())
          // }

          setCredemail(user.email);
          emaillist.push(user.email);

          const uid = user.uid;
          await setDoc(doc(db, "Firebase-test users", "num4"), {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
          });
        } else {
          console.log("error");
        }
      });
      // console.log('sendingss');
    }
    Dbadd();
    Datenow();


    const clearFocusedTextarea = (e) => {
      if (e.ctrlKey && e.code === 'Space') {
        Clear();
        e.preventDefault()
        // Check if the currently focused element is a textarea
        }} ;
        window.addEventListener('keydown', clearFocusedTextarea);
        return () => {
          window.removeEventListener('keydown', clearFocusedTextarea);
        };






  }, [credemail]); //------------> End of Use Effect

  const signOut = () => {
    localStorage.clear();
    router.push("/login");
    console.log("here at login");
  };

  function Clear() {
    setComments("");
    setDesc("");
    setLog("");
    setHighlight("");
  }

  // const Savedb = async (e) => {e.preventDefault();  Datenow();
  const Savedb = async () => {
    Datenow();
    try {
      setName("@archive");
     const response = await axios.post(
        thisbasez + "/clients",
        { log, desc, comments, date, name, highlight, credemail },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log('this is response, :', response)
    } catch (error) {
      console.error(error.response.data);
    }
    getData();
    // alert("New Entry Created");
  };

  function Datenow() {
    var today = new Date();

    function thisday() {
      // var typeday = today.getDay();
      // if (typeday === 0) { return 'Mon'  };
      // if (typeday === 1) { return 'Tue'  };
      // if (typeday === 2) { return 'Wed'  };
      // if (typeday === 3) { return 'Thu'  };
      // if (typeday === 4) { return 'Fri'  };
      // if (typeday === 5) { return 'Sat'  };
      // if (typeday === 6) { return 'Sun'  };
      //     }

      var typeday = today.getDay();
      if (typeday === 1) {
        return "Mon";
      }
      if (typeday === 2) {
        return "Tue";
      }
      if (typeday === 3) {
        return "Wed";
      }
      if (typeday === 4) {
        return "Thu";
      }
      if (typeday === 5) {
        return "Fri";
      }
      if (typeday === 6) {
        return "Sat";
      }
      if (typeday === 0) {
        return "Sun";
      }
    }
    var tday = thisday();

    function thisMonth() {
      var typedy = today.getMonth();
      var typeday = typedy + 1;
      if (typeday === 1) {
        return "Jan";
      }
      if (typeday === 2) {
        return "Feb";
      }
      if (typeday === 3) {
        return "Mar";
      }
      if (typeday === 4) {
        return "Apr";
      }
      if (typeday === 5) {
        return "May";
      }
      if (typeday === 6) {
        return "Jun";
      }
      if (typeday === 7) {
        return "Jul";
      }
      if (typeday === 8) {
        return "Aug";
      }
      if (typeday === 9) {
        return "Sep";
      }
      if (typeday === 10) {
        return "Oct";
      }
      if (typeday === 11) {
        return "Nov";
      }
      if (typeday === 12) {
        return "Dec";
      }
    }
    var Mnth = thisMonth();
    // const date = today.getFullYear() + ' / ' + Mnth + ' / ' + today.getDate() + ' ( ' + tday + ' )';
    const date =
      today.getDate() +
      "-" +
      Mnth +
      "-" +
      today.getFullYear() +
      " ( " +
      tday +
      " )";
    setDate(date);
  }

  function Inchangelog(e) {
    e.preventDefault();
    setLog(e.target.value);
    // console.log(e.target.value);

    // console.log(x);
    setCountwords(
      e.target.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "").split(" ").length
    );
  }

  function Inchangedesc(e) {
    e.preventDefault();
    setDesc(e.target.value);
  }

  function Inchangecomm(e) {
    e.preventDefault();
    setComments(e.target.value);
  }

  function Inchangehighlight(e) {
    e.preventDefault();
    setHighlight(e.target.value);
  }

  if (typeof window !== "undefined") {
    var textareas = document.getElementsByTagName("textarea");
    var count = textareas.length;
    for (var i = 0; i < count; i++) {
      textareas[i].onkeydown = function (e) {
        if (e.key === "Tab") {
          e.preventDefault();
          var s = this.selectionStart;
          this.value =
            this.value.substring(0, this.selectionStart) +
            "\t" +
            this.value.substring(this.selectionEnd);
          this.selectionEnd = s + 1;
        }
      };
    }
  }

  async function NewPage() {
    try {
      const response = await axios.post(
        thisbasez + "/clients",
        {
          log: "",
          desc: "",
          comments: "",
          date,
          name: "",
          highlight: "",
          credemail,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log('response', response)
      alert('new log created')
    } catch (error) {
      console.error(error.response.data);
    }
    // console.log(response);
    getData();
    // alert("Blank Entry Created");
  }

  const handleUpdateClient = async (e) => {
    e.preventDefault();
    Datenow();
    try {
      await api
        .put(`clients/${_id}`, { log, desc, comments, date, name, highlight })
        .then(alert("Entry Updated"));
    } catch (error) {
      console.log(error);
    }
    getData();

  };

  const Delete = async (e) => {
    e.preventDefault();

    // Display a confirmation popup
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await api.delete(`/clients/${_id}`);
          // Handle successful deletion, e.g., show a success message
          Clear();
          getData();
          Swal.fire('Deleted!', 'The entry has been deleted.', 'success');
        } catch (err) {
          console.log('err:', err);
          // Handle error, e.g., show an error message
          Swal.fire('Error', 'An error occurred while deleting the client.', 'error');
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle cancellation, e.g., show a message
        Swal.fire('Cancelled', 'The deletion has been cancelled.', 'info');
      }
    });



  };

  const Testfunction = async (e, resv) => {
    e.preventDefault();
    try {
      await axios.post(
        thisbasez + "/clients/feedback",
        { feedback: { resv }, date, credemail },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.error(error.response.data);
    }
    getData();
    alert("Blank Entry Created");
  };

  const Swalfeed = () => {
    Swal.fire({
      title: "Feedbox!",
      text: "Suggesstion, Comments and Recommendations are very much appreciated",
      input: "textarea",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.value) {
        console.log("this is result:", result);
        try {
          const data = await axios.post(
            thisbasez + "/clients/feedback",
            { feedback: result.value, date, credemail },
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          console.log("data:", data.data.status);
          Swal.fire({
            title: "Status:",
            text: data.data.status,
          });
        } catch (error) {
          console.error(error.response.data);
        }
        getData();
      }
    });
  };

  function countWord() {
    // Get the input text value
    var words = document.getElementById("tarea2").value;

    // Initialize the word counter
    var count = 0;

    // space character
    var split = words.split(" ");

    // Loop through the words and
    // increase the counter when
    // each split word is not empty
    for (var i = 0; i < split.length; i++) {
      if (split[i] != "") {
        count += 1;
      }
    }

    document.getElementById("show");
  }

  const toggleList = () => {
    setShowList(!showList);
  };

  const toggleArchive = () => {
    setArchive(!archive);
  };

  const AddtoArchive = async (e) => {
    e.preventDefault();
    Datenow();
    try {
      await api
        .put(`clients/${_id}`, {
          log,
          desc,
          comments,
          name: `${archive ? name : "@archive"}`,
          highlight,
          date
        })
        .then(alert("Added to Archive"));
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  const RemovedFromArchive = async (e) => {
    e.preventDefault();
    try {
      await api
        .put(`clients/${_id}`, { log, desc, comments, name: "", highlight })
        .then(alert("Removed From Archive"));
    } catch (error) {
      console.log(error);
    }
    // getData();
  };

  const buttonStyles = {
    boxShadow: "none",
    ":active": {
      boxShadow: "0 0 10px #fff",
    },
    ":focus": {
      boxShadow: "0 0 10px #fff",
    },
    ":hover": {
      backgroundColor: "blue",
      color: "white",
    },
  };

  const Rename = () => {
    Swal.fire({
      title: "Rename!",
      text: "Suggesstion, Comments and Recommendations are very much appreciated",
      input: "textarea",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.value) {
        console.log("this is result:", result);
        try {
          // setName((result.value))
          await api
            .put(`clients/${_id}`, {
              log,
              desc,
              comments,
              name: result.value + " @archive",
              highlight,
            })
            .then(alert("Renamed and Saved to Archive!"));
        } catch (error) {
          console.log(error);
        }
        // getData();
      }
    });
  };

  // const handleHighlightClick = () => {
  //   setIsHighlighted(!isHighlighted);
  // };

  const textareaClasses = `w-full p-2 rounded-lg ${
    isHighlighted ? "bg-yellow-200 outline-none" : ""
  }`;

  const [textareaValue, setTextareaValue] = useState("");

  const handleHighlightClick = () => {
    const textarea = document.getElementById("tarea2");
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const selectedText = log.substring(selectionStart, selectionEnd);
    const highlightedText = `<span class="text-blue-500">${selectedText}</span>`;
    const newLogValue =
      log.substring(0, selectionStart) +
      highlightedText +
      log.substring(selectionEnd);
    setLog(newLogValue);
  };

  const [attendanceState, setAttendanceState] = useState("Hello");
  // const Junedays = 'hi'



  return (
    <main className="block relative  overflow-x-hidden pt-5 ">


      {/* <div>{Junedays}</div> */}
      <section className="attendance relative sm:absolute  w-screen flex flex-col justify-center items-center ">
        {/* <div className="bg-blue-400"> */}
        <Ask setMainlist={setMainlist} mainlist={mainlist} />
        {/* <input
        type="text"
        value={searchon}
        onChange={(e) => setSearchon(e.target.value)}
        placeholder="Enter search term"
      /> <button>Search</button> */}
      {/* </div> */}
        <Attendance
          Jandays={Jandays}
          Febdays={Febdays}
          Mardays={Mardays}
          Aprdays={Aprdays}
          Maydays={Maydays}
          Junedays={Junedays}
          Juldays={Juldays}
          Augdays={Augdays}
          Sepdays={Sepdays}
          Octdays={Octdays}
          Novdays={Novdays}
          Decdays={Decdays}
        />
      </section>

      {/* <button
        className=" right-0 p-2 mr-8 top-[6em] sm:top-0 bg-blue-300 bg-opacity-40 rounded-full mt-2 mb-0 hover:scale-110 hover:bg-blue-400 drop-shadow-lg flex relative sm:absolute "
        onClick={Swalfeed}
      >
        <p>&nbsp; Send Feedback &nbsp;</p>
        <Image
          src={Feedback}
          alt="Clear"
          width={40}
          height={40}
          className="hover:scale-110 z-1000"
        />
      </button> */}

      <img
        className="background top-0 left-0 w-screen h-screen object-cover fixed -z-10"
        src={
          "https://cdn.pixabay.com/photo/2016/05/26/12/56/waterfalls-1417102_1280.jpg"
        }
        alt=" "
      />

      <section className="wordcount relative sm:absolute top-[1em] sm:top-[6em] flex left-[65%] bg-blue-4000 ">
        Word Count:
        <span id="show">{countwords}</span>{" "}
        <button
          onClick={handleHighlightClick}
          className="bg-blue-500 text-white ml-2 rounded-lg "
        ></button>
        {/* <button onClick={handleHighlightClick} className="bg-blue-500 text-white p-2 rounded-lg mt-2">Highlight</button> */}
        {/* <Image src={Feedback} alt="Clear" width={40} height={40} className="hover:scale-110 z-1000"/> */}
      </section>


      <div id="Unav" className="h-[1em]  sm:h-[6em]">
        <Usernav />
      </div>


      <section className="interfacece   sm:block md:h-[90em] lg:grid lg:grid-cols-3  z-1000 relative w-full top-0  p-3 lg:h-screen  mt-2 ">
        <div
          className=" relative flex flex-col  content-center items-center lg:mr-4 md:mb-5
                       bg-white bg-opacity-80 backdrop-blue-lg rounded-xl drop-shadow-lg space-y-2 "

        >
          <div className="relative  grid w-[100%] grid-cols-5 justify-self-auto items-end p-1 mr-0 pb-4 ">
            <div className="col-span-2  top-0 relative mb-16 ml-3">
              <button onClick={signOut}>
                <Image
                  src={Out}
                  alt="Clear"
                  width={40}
                  height={40}
                  className="hover:scale-110"
                />{" "}
              </button>
            </div>
            {archive}
            <img
              src={photoURL}
              alt="photome"
              className=" relative justify-self-center mt-5 rounded-full "
            />
          </div>

          <div className="flex flex-row bg-blue-200 px-6 py-2 rounded-full">
            <button onClick={Delete} title="Delete" className="mr-2 rounded-lg bg-blue-200">
              <Image
                src={Del}
                alt="Clear"
                width={40}
                height={40}
                className="hover:scale-110"
              />
            </button>
           <button onClick={Clear} title="Clear" className="mx-2">
              <Image
                src={Clr}
                alt="Clear"
                width={40}
                height={40}
                className="hover:scale-110"
              />
            </button>
            <button
              onClick={handleUpdateClient}
              disabled={archive}
              title={
                archive ? "Button Disbaled When Archive is True " : "Update"
              }
              className="mx-2"
            >
              <Image
                src={Save}
                alt="Add"
                width={40}
                height={40}
                className="hover:scale-110"
              />
            </button>
            <button onClick={Savedb} title="Duplicate" className="mx-2">
              <Image
                src={Copy}
                alt="Add"
                width={40}
                height={40}
                className="hover:scale-110"
              />
            </button>
            <button onClick={NewPage} title="New" className="ml-2">
              <Image
                src={Blank}
                alt="Clear"
                width={40}
                height={40}
                className="hover:scale-110"
              />
            </button>
          </div>

          <div className=" p-2">
          <button onClick={showRecent} title="Recent" className="mr-2 rounded-lg bg-blue-200">
              <Image
                src={Recent}
                alt="Clear"
                width={40}
                height={40}
                className="hover:scale-110"
              />
            </button>


            {/* <button onClick={toggleList} title="Hide/Show" className="mr-2 rounded-lg bg-blue-200">
              <Image
                src={Hide}
                alt="Clear"
                width={40}
                height={40}
                className="hover:scale-110"
              />
            </button> */}


            <button
              onClick={toggleArchive}
              title="Show Archive Files"
              className={`${archive ? "shine" : ""} mr-2 rounded-lg bg-blue-200`}
            >
              <Image
                src={Archive}
                alt="Clear"
                width={40}
                height={40}
                className="hover:scale-110 rounded-sm; focus: "
                style={buttonStyles}
              />
            </button>
            <button
              onClick={AddtoArchive}
              title={`${archive ? "Save/Update Archive File" : "Add to Archives" }`}
              className={`${archive ? "shine" : ""} mr-2 rounded-lg bg-blue-200 `}
            >
              <Image
                src={Add}
                alt="Clear"
                width={40}
                height={40}
                className="hover:scale-110"
              />
            </button>
            <button
              onClick={RemovedFromArchive}
              title="Remove from Archive"
              className={`${archive ? "shine" : ""} mr-2 rounded-lg bg-blue-200`}
            >
              <Image
                src={shredder}
                alt="Clear"
                width={40}
                height={40}
                className="hover:scale-110"
              />
            </button>
            <button
              onClick={Rename}
              title="Rename"
              className={archive ? "shine mr-2 rounded-lg bg-blue-200" : "mr-2 rounded-lg bg-blue-200"}
            >
              <Image
                src={changes}
                alt="Clear"
                width={40}
                height={40}
                // blurHeight={40}
                className="hover:scale-110"
              />
            </button>
            <button
  onClick={() =>
    window.open(
      "https://docs.google.com/spreadsheets/d/10LwXEMnIDlUmTPHAbM7ZOsDLBV2PLcsMo7QR2zM67z0/edit?gid=0#gid=0",
      "_blank"
    )
  }
  title="Spreadsheet"
  className="mr-2 rounded-lg bg-blue-200"
>
  <Image
    src={Spreadsheet}
    alt="Spreadsheet"
    width={40}
    height={40}
    className="hover:scale-110"
  />
</button>

          </div>

          <div className=" mt-5 w-[95%] block h-[200px] lg:h-[50vh] px-4 overflow-auto rounded-xl">
            {/* {showList && */}

            {mainlist
              // .filter((el, index) => !archive || el.name === '@archive')
              .filter((el, index) => !archive || el.name.includes("@archive"))
              .map((el, index) => (
                <div key={index * 2} className="flex flex-row">
                  <button
                    key={index * 3}
                    onClick={function Con() {
                      el.name ? setName(el.name) : setName("");
                      el._id ? set_id(el._id) : set_id("null");
                      el.log ? setLog(el.log) : setLog("");
                      el.desc ? setDesc(el.desc) : setDesc("");
                      el.comments ? setComments(el.comments) : setComments("");
                      el.highlight
                        ? setHighlight(el.highlight)
                        : setHighlight("");
                      setSelectedButton(index * 3);
                    }}
                    className={`last:w-full min-h-10 bg-violet-300 opacity-[95%] p-2 rounded mt-2 hover:scale-105 my-button ${
                      index * 3 === selectedButton ? "selected" : ""
                    }`}
                  >
                    {el.name.replace("@archive", "")
                      ? el.name.replace("@archive", "")
                      : el.date}
                  </button>
                </div>
              ))}
          </div>
        </div>

        <textarea
          id="tarea2"
          type="text"
          placeholder="Entry"
          value={log}
          onInput={countWord}
          onChange={Inchangelog}
          className={`${
            showList ? "lg:w-full" : "lg:w-full"
          } mb-6 mt-6 lg:mt-0 lg:w-full w-[100%]  h-[20em] lg:h-full relative flex bg-white bg-opacity-80 backdrop-blur-lg drop-shadow-lg p-4 justify-center  md:mr-9 ${textareaClasses}`}
          // className="lg:w-[37.5%] mt-2 md:mt-0 w-[100%]  h-[20em] md:h-full lg:h-full relative flex bg-white bg-opacity-80 backdrop-blur-lg drop-shadow-lg p-4 justify-center  md:mr-9"
        />
        {showList ? (
          <div className=" mt-2 md:mt-0  lg:pl-4 sm:block md:flex md:flex-col h-10 md:h-auto">
            <textarea
              id="tarea2"
              type="text"
              placeholder="What Do You Want To Write Or Talk About?"
              value={highlight}
              /* defaultValue={desc} */ onChange={Inchangehighlight}
              className="w-full lg:h-[200%] md:h-[10em]  relative flex bg-white mb-6 bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"
            />
            <textarea
              id="tarea2"
              type="text"
              placeholder="What Insights Do You Want To Take Note Of?"
              value={desc}
              /* defaultValue={desc} */ onChange={Inchangedesc}
              className="w-full lg:h-[200%] md:h-[10em] relative flex bg-white mb-4 bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"
            />
            <textarea
              id="tarea2"
              type="text"
              placeholder="Is There Something You Want To Be Thankful For Today?"
              value={comments}
              /* defaultValue={comments} */ onChange={Inchangecomm}
              className="w-full lg:h-[200%] md:h-[10em]   relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"
            />
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
}
