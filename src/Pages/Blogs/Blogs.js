import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  // Sample blog data (replace with your actual blog data)
  const blogs = [
    {
      id: 1,
      title: "The Art of Web Development",
      author: "John Smith",
      date: "August 20, 2023",
      content:
        "In this blog post, we explore the principles and best practices of web development. From HTML to JavaScript, we'll cover it all! platforms can assist in this process.  **8. Content Prioritization:** Consider what content is essential for mobile users and prioritize its placement. On smaller screens, focus on providing critical information first.**9. Performance Optimization:** Optimize your website's performance by minimizing large images, using efficient code, and leveraging techniques like lazy loading to reduce load times.    **10. Cross-Browser Compatibility:** Ensure your responsive design works well across different web browsers, including Chrome, Firefox, Safari, and Edge.By implementing these responsive design techniques and best practices, you can create a website that delivers an excellent user experience, regardless of the device your visitors are using. Responsive design not only enhances usability CSS Grid Layout is a powerful tool for creating complex layouts. Dive deep into CSS Grid and become a layout expert! Testing:** Regularly test your website on various devices and screen sizes to ensure that it looks and functions as intended. Popular tools like Chrome DevTools and responsive design testing platforms can assist in this process.  **8. Content Prioritization:** Consider what content is essential for mobile users and prioritize its placement. On smaller screens, focus on providing critical information first.**9. Performance Optimization:** Optimize your website's performance by minimizing large images, using efficient code, and leveraging techniques like lazy loading to reduce load times.    **10. Cross-Browser Compatibility:** Ensure your responsive design works well across different web browsers, including Chrome, Firefox, Safari, and Edge.By implementing these responsive design techniques and best practices, you can create a website that delivers an excellent user experience, regardless of the device your visitors are using. Responsive design not only enhances usability",
    },
    {
      id: 2,
      title: "Responsive Design Techniques",
      author: "Jane Doe",
      date: "August 15, 2023",
      content: `In today's digital age, where users access websites and applications from a variety of devices, responsive design has become an essential aspect of modern web development. Responsive design ensures that websites look and function seamlessly across different screen sizes and devices, including desktops, laptops, tablets, and smartphones.    
        Responsive web design is not just a trend; it's a necessity. Google, one of the world's leading search engines, considers mobile-friendliness as a ranking factor. This means that if your website is not responsive, it may not rank as well in search engine results, leading to a potential loss of traffic and business.    
        So, how can you create a responsive website that adapts to various screens and devices? Here are some fundamental techniques and best practices:    
        **1. Fluid Layouts:** Start with a fluid or flexible layout that uses relative units like percentages for width and height rather than fixed pixel values. This allows your content to adjust proportionally based on the screen size.    
        **2. Media Queries:** Use CSS media queries to apply different styles based on the screen's characteristics, such as width, height, and orientation. Media queries allow you to create breakpoints where your design can adapt. **3. Mobile-First Approach:** Begin your design process with mobile devices in mind. This approach ensures that your website's core functionality and content are optimized for smaller screens. As the screen size increases, you can enhance the layout and features.     **4. Flexible Images:** Use CSS to make images scale dynamically with the layout. The CSS property  is commonly applied to images to prevent them from overflowing their containers.  **5. Responsive Typography:** Implement responsive typography with relative units like  or . Adjust font sizes and line heights to ensure readability on different screens.    
        **6. Navigation Menus:** Create responsive navigation menus that transform into a mobile-friendly menu (such as a hamburger menu) on smaller screens. CSS and JavaScript can help achieve this functionality.    
        **7. Testing:** Regularly test your website on various devices and screen sizes to ensure that it looks and functions as intended. Popular tools like Chrome DevTools and responsive design testing platforms can assist in this process.    
        **8. Content Prioritization:** Consider what content is essential for mobile users and prioritize its placement. On smaller screens, focus on providing critical information first.    
        **9. Performance Optimization:** Optimize your website's performance by minimizing large images, using efficient code, and leveraging techniques like lazy loading to reduce load times.    
        **10. Cross-Browser Compatibility:** Ensure your responsive design works well across different web browsers, including Chrome, Firefox, Safari, and Edge.    
        By implementing these responsive design techniques and best practices, you can create a website that delivers an excellent user experience, regardless of the device your visitors are using. Responsive design not only enhances usability but also helps your website rank higher in search results and reach a broader audience.
      `,
    },

    {
      id: 3,
      title: "CSS Grid Layout Mastery",
      author: "Alex Johnson",
      date: "August 10, 2023",
      content:
        "CSS Grid Layout is a powerful tool for creating complex layouts. Dive deep into CSS Grid and become a layout expert! Testing:** Regularly test your website on various devices and screen sizes to ensure that it looks and functions as intended. Popular tools like Chrome DevTools and responsive design testing platforms can assist in this process.  **8. Content Prioritization:** Consider what content is essential for mobile users and prioritize its placement. On smaller screens, focus on providing critical information first.**9. Performance Optimization:** Optimize your website's performance by minimizing large images, using efficient code, and leveraging techniques like lazy loading to reduce load times.    **10. Cross-Browser Compatibility:** Ensure your responsive design works well across different web browsers, including Chrome, Firefox, Safari, and Edge.By implementing these responsive design techniques and best practices, you can create a website that delivers an excellent user experience, regardless of the device your visitors are using. Responsive design not only enhances usability CSS Grid Layout is a powerful tool for creating complex layouts. Dive deep into CSS Grid and become a layout expert! Testing:** Regularly test your website on various devices and screen sizes to ensure that it looks and functions as intended. Popular tools like Chrome DevTools and responsive design testing platforms can assist in this process.  **8. Content Prioritization:** Consider what content is essential for mobile users and prioritize its placement. On smaller screens, focus on providing critical information first.**9. Performance Optimization:** Optimize your website's performance by minimizing large images, using efficient code, and leveraging techniques like lazy loading to reduce load times.    **10. Cross-Browser Compatibility:** Ensure your responsive design works well across different web browsers, including Chrome, Firefox, Safari, and Edge.By implementing these responsive design techniques and best practices, you can create a website that delivers an excellent user experience, regardless of the device your visitors are using. Responsive design not only enhances usability",
    },
    // Add more blog entries as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Blog blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
