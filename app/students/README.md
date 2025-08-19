# Students Page

This page showcases the brilliant students of PSC Classes with a beautiful, interactive interface.

## Features

### 🎯 Hero Section
- **"Our Stars"** themed hero section
- Statistics display (Total Students, Academic Excellence, Success Rate, Years of Excellence)
- Animated elements with Framer Motion

### 🔍 Real-time Search
- Search by student name, father's name, class, or enrollment ID
- Instant filtering as you type
- Works across all batches (boys, girls, or all students)

### 👥 Batch Separation
- **Boys Batch**: Dedicated section for male students
- **Girls Batch**: Dedicated section for female students
- **All Students**: Combined view of all students
- Easy switching between batches using tabs

### 📋 Student Information Display
Each student card shows:
- **Photo**: Student photo with fallback to initials
- **Name**: Full student name
- **Father's Name**: With "Mr." prefix as requested
- **Class**: Current class/grade
- **Enrollment ID**: Unique student identifier
- **Batch**: Morning or Evening batch
- **Achievements**: List of student accomplishments

### 🎨 UI Features
- Responsive grid layout (1-4 columns based on screen size)
- Hover effects and animations
- Beautiful card design with gradients
- Achievement badges
- Batch indicators
- Loading states and empty states

## Data Management

### Adding New Students

1. **Edit the data file**: `app/our-star/data.ts`
2. **Add student information**:
   ```typescript
   {
     id: 17, // Unique ID
     name: "Student Name",
     fatherName: "Mr. Father Name",
     class: "Class 10",
     photo: "/students/student-photo.jpg", // Add photo to public/students/
     enrollmentId: "PSC2024017",
     achievements: ["Achievement 1", "Achievement 2"],
     batch: "Morning" // or "Evening"
   }
   ```

3. **Add to appropriate batch**:
   - Add to `boys` array for male students
   - Add to `girls` array for female students

### Adding Student Photos

1. **Upload photos** to `public/students/` directory
2. **Update photo paths** in `data.ts`
3. **Recommended format**: JPG or PNG, 400x400px or larger
4. **Naming convention**: `boy1.jpg`, `girl1.jpg`, etc.

### Updating Statistics

Edit the `stats` array in `data.ts`:
```typescript
export const stats = [
  { label: "Total Students", value: "150+", icon: "Users" },
  { label: "Academic Excellence", value: "95%", icon: "Star" },
  { label: "Success Rate", value: "98%", icon: "Award" },
  { label: "Years of Excellence", value: "8+", icon: "Trophy" }
];
```

## Navigation

The students page is accessible through:
- **Desktop Navigation**: "Students" link in the main navigation bar
- **Mobile Navigation**: "Our Students" in the mobile menu under "Coaching" section
- **Main Menu**: "Our Students" in the left sidebar under "Company" section

## Technical Details

### Components Used
- `Header` and `Footer` from main layout
- `Card`, `Button`, `Input`, `Badge` from UI components
- `Tabs`, `Avatar` for interactive elements
- `motion` from Framer Motion for animations

### State Management
- `searchQuery`: Current search term
- `activeTab`: Currently selected batch filter
- `filteredStudents`: Computed filtered results

### Performance
- Uses `useMemo` for efficient filtering
- Lazy loading of images
- Optimized re-renders

## Customization

### Styling
- Colors follow the theme system
- Primary color used for highlights
- Responsive design with Tailwind CSS

### Animations
- Staggered animations for student cards
- Smooth transitions for search and filtering
- Hover effects on interactive elements

## Future Enhancements

Potential improvements:
- [ ] Student detail modal/page
- [ ] Advanced filtering (by class, achievements, etc.)
- [ ] Student testimonials
- [ ] Academic performance tracking
- [ ] Student gallery with more photos
- [ ] Export functionality for student lists
