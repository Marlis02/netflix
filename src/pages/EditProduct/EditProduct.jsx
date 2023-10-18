import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../context/productContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import CircularProgressWithLabel from "../../components/Progress";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const productId = id;
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const field = useRef({
    title: "",
    description: "",
    image: "",
  });
  const [progress, setProgress] = useState(0);
  const [video, setVideo] = useState(null);
  const { editProduct, categories, getCategories, getProductById } =
    useContext(productContext);
  const handleUpload = () => {
    console.log(video);
    if (!video) return;
    const metadata = {
      contentType: "video/mp4",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `videos/${video.name}`);
    const uploadTask = uploadBytesResumable(storageRef, video, metadata);

    // const uploadTask = storage.ref(`videos/${video.name}`).put(video);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          editProduct(productId, { ...field.current, url: downloadURL });
          setProgress(0);
          toast.success("успешно изменили товар");
        });
      }
    );
  };

  const onSubmit = (data) => {
    field.current = data;
    handleUpload();
    const productWithCategory = {
      ...field.current,
      category: data.category,
    };

    editProduct(productId, productWithCategory);
    console.log(field);
    console.log("382782");
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h3>Create Product</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <CircularProgressWithLabel value={progress} />
      </div>
      <form
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField label="Title" {...field} type="text" />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <TextField label="Description" {...field} type="text" />
          )}
        />
        <FormControl>
          <InputLabel id="demo-select-small-label">Category</InputLabel>
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <Select
                {...field}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={field.value}
                label="Category"
                error={!!errors.category}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories &&
                  categories.map(({ name }) => (
                    <MenuItem value={name}>{name}</MenuItem>
                  ))}
              </Select>
            )}
          />
        </FormControl>
        <Controller
          control={control}
          name="image"
          render={({ field }) => (
            <TextField label="Image for poster" {...field} type="text" />
          )}
        />

        <Button component="label" variant="contained">
          <TextField
            className="uploadFile"
            type="file"
            accept="video/*" // Позволяет выбирать только видеофайлы
            value={video?.fileName}
            onChange={handleChange}
          />
        </Button>

        <Button type="submit" variant="outlined">
          Create
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
