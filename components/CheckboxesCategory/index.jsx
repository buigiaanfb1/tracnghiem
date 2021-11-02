import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { useRouter } from 'next/router';
import categoriesCheckboxes from '../../common/categoriesCheckboxes.json';

const CheckboxesCategory = ({ classNames }) => {
  const classes = classNames;
  const router = useRouter();
  const [state, setState] = useState(categoriesCheckboxes);

  useEffect(() => {
    handlePersistFromUrl(state);
  }, [router.isReady]);

  // when page is reload, get query form url apply to state
  const handlePersistFromUrl = () => {
    let categories = [...state];
    let categoriesFromUrl = router.query.category;
    if (categoriesFromUrl) {
      categories.map((category, index) => {
        if (category.name === categoriesFromUrl) {
          console.log(category.name === categoriesFromUrl);
          categories[index].selected = true;
        }
      });
      setState(categories);
    }
  };

  const handleChange = (e) => {
    router.push({
      query: {
        ...router.query,
        page: router.query || 1,
        category: e.target.name,
      },
    });
  };

  const handleRenderChoice = () => {
    console.log(state);
    return state.map((category) => {
      return (
        <FormControlLabel
          key={category.id}
          control={
            <Checkbox
              checked={category.selected}
              onChange={handleChange}
              name={category.name}
              size="small"
            />
          }
          label={category.label}
        />
      );
    });
  };

  return (
    <div className={classes.containerCheckbox}>
      <Typography className={classes.titleCate}>Danh mục</Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>{handleRenderChoice()}</FormGroup>
      </FormControl>
    </div>
  );
};

export default React.memo(CheckboxesCategory);
