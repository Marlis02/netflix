import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { productContext } from "../../context/productContext";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import CircularProgressWithLabel from "../../components/Progress";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const field = useRef({
    title: "",
    description: "",
    image: "",
  });
  const [progress, setProgress] = useState(0);
  const [video, setVideo] = useState(null);
  const { createProduct, categories, getCategories } =
    useContext(productContext);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
          createProduct({
            ...field.current,
            url: downloadURL,
          });
          setProgress(0);
          toast.success("Вы успешно создали продукт !");
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

    createProduct(productWithCategory);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  //===============================================================================================
  useEffect(() => {
    getCategories();
  }, []);
  // console.log(categories, "ksdfjkj");

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
          rules={{ required: "Title is required" }}
          render={({ field }) => (
            <TextField
              error={!!errors.title}
              helperText={errors.title?.message?.toString()}
              label="Title"
              {...field}
              type="text"
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <TextField
              error={!!errors.description}
              helperText={errors.description?.message?.toString()}
              label="Description"
              {...field}
              type="text"
            />
          )}
        />
        <FormControl>
          <InputLabel id="demo-select-small-label">Category</InputLabel>
          <Controller
            control={control}
            name="category"
            rules={{ required: "Price is required" }}
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
          rules={{ required: "Image is required" }}
          render={({ field }) => (
            <TextField
              error={!!errors.description}
              helperText={errors.description?.message?.toString()}
              label="Image for poster"
              {...field}
              type="text"
            />
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

export default CreateProduct;
