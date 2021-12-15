import React from "react";
import Form from "../Form/Form";

const AddPost: React.FC = () => {
  return <Form />;
};
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const user = useAppSelector((state) => state.auth.curUser);
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [didChooseCategory, setDidChooseCategory] = useState<boolean>(false);
//   const [chosenCategory, setChosenCategory] = useState<string>("");
//   const [imageField, setImageField] = useState<boolean>(false);
//   const [capturedImage, setCapturedImage] = useState<string>("");
//   const [theImage, setTheImage] = useState<string>(""); // use this when submitting the entire form
//   const titleRef = useRef<HTMLInputElement>();
//   const shortDescriptionRef = useRef<HTMLInputElement>();
//   const articleRef = useRef<HTMLInputElement>();

//   const open = Boolean(anchorEl);

//   const handleClick = (e: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(e.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const chooseCategory = (e: React.MouseEvent<HTMLElement>) => {
//     if (!e.currentTarget.textContent) return;
//     setChosenCategory(e.currentTarget.textContent);
//     setDidChooseCategory(true);
//   };

//   const toggleHandler = () => {
//     setDidChooseCategory(false);
//     setAnchorEl(null);
//   };

//   const imageSubmitHandler = (e: React.FormEvent) => {
//     e.preventDefault();
//     setTheImage(capturedImage);
//     setImageField(false);
//     setCapturedImage("");
//   };
//   const showImageField = () => {
//     setImageField(true);
//   };
//   const hideImageField = () => {
//     setImageField(false);
//   };

//   const submitHandler = (e: React.FormEvent) => {
//     e.preventDefault();
//     const data: Post = {
//       id: Math.random().toString(),
//       title: titleRef.current!.value,
//       author: user?.displayName || "No Author",
//       image: theImage,
//       time: new Date(),
//       description: shortDescriptionRef.current!.value,
//       category: chosenCategory,
//       profilePic:
//         user?.photoURL ||
//         "https://carnbrae.com.au/wp-content/uploads/2021/05/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
//       article: articleRef.current!.value.split("  "),
//       comments: [],
//     };
//     console.log(data);
//     dispatch(dataActions.addPost(data));
//     navigate("/");
//     //almost there
//   };
//   const cancelHandler = (e: React.FormEvent) => {
//     navigate("/");
//   };
//   return (
//     <Fragment>
//       {imageField && (
//         <Fragment>
//           <Overlay click={hideImageField}></Overlay>
//           <form className={classes.image_div} onSubmit={imageSubmitHandler}>
//             <label htmlFor="image">Image URL</label>
//             <TextField
//               id="image"
//               label="Image"
//               variant="outlined"
//               required
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                 setCapturedImage(e.target.value)
//               }
//             />
//           </form>
//         </Fragment>
//       )}
//       <form className={classes.form}>
//         <header
//           onClick={showImageField}
//           className={classes.header}
//           style={{
//             backgroundImage: theImage
//               ? `url(${theImage})`
//               : " linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
//           }}
//         >
//           {!theImage && (
//             <img src={add} className={classes.img} alt="add_image" />
//           )}
//         </header>
//         <main>
//           <div className={classes.title}>
//             <label htmlFor="title_input">Add Title(max: 50 characters)</label>
//             <TextField
//               id="title_input"
//               label="Title"
//               variant="outlined"
//               required
//               inputProps={{ maxLength: 40 }}
//               inputRef={titleRef}
//             />
//           </div>
//           <div className={classes.short_description}>
//             <label htmlFor="short_description">
//               Add Short Description(max: 140 characters)
//             </label>
//             <TextField
//               id="short_description"
//               label="Short Description"
//               variant="outlined"
//               required
//               inputProps={{ maxLength: 140 }}
//               inputRef={shortDescriptionRef}
//             />
//           </div>
//           <div className={classes.article}>
//             <label htmlFor="article_input">Add Article</label>
//             <p>Note: Add Double Spacing to indicate a new paragrah</p>
//             <TextField
//               id="article_input"
//               label="Article"
//               variant="outlined"
//               required
//               multiline
//               rows={20}
//               inputRef={articleRef}
//             />
//           </div>
//           <div className={classes.category}>
//             {didChooseCategory ? (
//               <p className={classes.chosen} onClick={toggleHandler}>
//                 {chosenCategory}
//               </p>
//             ) : (
//               <div>
//                 <Button
//                   variant="outlined"
//                   className={classes.cat_btn}
//                   aria-expanded={open ? "true" : undefined}
//                   aria-controls="demo-positioned-menu"
//                   aria-haspopup="true"
//                   onClick={handleClick}
//                 >
//                   Cateogry
//                 </Button>
//                 <Menu
//                   aria-labelledby="demo-positioned-button"
//                   anchorEl={anchorEl}
//                   open={open}
//                   onClose={handleClose}
//                   anchorOrigin={{
//                     vertical: "top",
//                     horizontal: "center",
//                   }}
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "center",
//                   }}
//                 >
//                   <MenuItem onClick={chooseCategory}>Web Development</MenuItem>
//                   <MenuItem onClick={chooseCategory}>Sports</MenuItem>
//                   <MenuItem onClick={chooseCategory}>Education</MenuItem>
//                   <MenuItem onClick={chooseCategory}>Photography</MenuItem>
//                   <MenuItem onClick={chooseCategory}>Coding</MenuItem>
//                   <MenuItem onClick={chooseCategory}>Other</MenuItem>
//                 </Menu>
//               </div>
//             )}
//             <div className={classes.btns}>
//               <CustomButton
//                 type="button"
//                 className={classes.cancel}
//                 onClick={cancelHandler}
//               >
//                 Cancel
//               </CustomButton>
//               <CustomButton
//                 type="submit"
//                 className={classes.submit}
//                 onClick={submitHandler}
//               >
//                 Submit
//               </CustomButton>
//             </div>
//           </div>
//         </main>
//       </form>
//     </Fragment>
//   );
// };

export default AddPost;
