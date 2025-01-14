// vocs.config.ts
import { defineConfig } from "file:///Users/francesco/Documents/farville-docs/farville-vocs/farville/node_modules/vocs/_lib/index.js";
var vocs_config_default = defineConfig({
  socials: [
    {
      icon: "warpcast",
      link: "https://github.com/wevm/viem"
    },
    {
      icon: "x",
      link: "https://twitter.com/wevm_dev"
    }
  ],
  title: "Farville",
  //logoUrl: '/farville-logo.jpeg', 
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started"
    },
    {
      text: "Example",
      link: "/example"
    }
  ],
  topNav: [
    { text: "Guide & API", link: "/docs/getting-started", match: "/docs" },
    { text: "Blog", link: "/blog" },
    {
      text: version,
      items: [
        {
          text: "Changelog",
          link: "https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md"
        },
        {
          text: "Contributing",
          link: "https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md"
        }
      ]
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZnJhbmNlc2NvL0RvY3VtZW50cy9mYXJ2aWxsZS1kb2NzL2ZhcnZpbGxlLXZvY3MvZmFydmlsbGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9mcmFuY2VzY28vRG9jdW1lbnRzL2ZhcnZpbGxlLWRvY3MvZmFydmlsbGUtdm9jcy9mYXJ2aWxsZS92b2NzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZnJhbmNlc2NvL0RvY3VtZW50cy9mYXJ2aWxsZS1kb2NzL2ZhcnZpbGxlLXZvY3MvZmFydmlsbGUvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2b2NzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzb2NpYWxzOiBbIFxuICAgIHsgXG4gICAgICBpY29uOiAnd2FycGNhc3QnLCBcbiAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vd2V2bS92aWVtJywgXG4gICAgfSwgXG4gICAgeyBcbiAgICAgIGljb246ICd4JywgXG4gICAgICBsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS93ZXZtX2RldicsIFxuICAgIH0sIFxuICBdLCBcbiAgdGl0bGU6ICdGYXJ2aWxsZScsXG4gIC8vbG9nb1VybDogJy9mYXJ2aWxsZS1sb2dvLmpwZWcnLCBcbiAgc2lkZWJhcjogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHZXR0aW5nIFN0YXJ0ZWQnLFxuICAgICAgbGluazogJy9nZXR0aW5nLXN0YXJ0ZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0V4YW1wbGUnLFxuICAgICAgbGluazogJy9leGFtcGxlJyxcbiAgICB9LFxuICBdLFxuICB0b3BOYXY6IFsgXG4gICAgeyB0ZXh0OiAnR3VpZGUgJiBBUEknLCBsaW5rOiAnL2RvY3MvZ2V0dGluZy1zdGFydGVkJywgbWF0Y2g6ICcvZG9jcycgfSwgXG4gICAgeyB0ZXh0OiAnQmxvZycsIGxpbms6ICcvYmxvZycgfSwgXG4gICAgeyBcbiAgICAgIHRleHQ6IHZlcnNpb24sIFxuICAgICAgaXRlbXM6IFsgXG4gICAgICAgIHsgXG4gICAgICAgICAgdGV4dDogJ0NoYW5nZWxvZycsIFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vd2V2bS92b2NzL2Jsb2IvbWFpbi9zcmMvQ0hBTkdFTE9HLm1kJywgXG4gICAgICAgIH0sIFxuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdDb250cmlidXRpbmcnLCBcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3dldm0vdm9jcy9ibG9iL21haW4vLmdpdGh1Yi9DT05UUklCVVRJTkcubWQnLCBcbiAgICAgICAgfSwgXG4gICAgICBdLCBcbiAgICB9LCBcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStXLFNBQVMsb0JBQW9CO0FBRTVZLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsRUFFUCxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLEVBQUUsTUFBTSxlQUFlLE1BQU0seUJBQXlCLE9BQU8sUUFBUTtBQUFBLElBQ3JFLEVBQUUsTUFBTSxRQUFRLE1BQU0sUUFBUTtBQUFBLElBQzlCO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
