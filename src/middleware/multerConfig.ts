import multer from "multer";

const storage = multer.diskStorage({
  destination: (_, _file, cb) => {
    cb(null, "uploads/");
  },
  filename: (_, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
export default upload;
