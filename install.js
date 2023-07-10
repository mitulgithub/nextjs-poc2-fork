const { execSync } = require('child_process');
const gitClone = require('git-clone');
const fs = require('fs-extra');

const repository = 'https://github.com/mitulgithub/nextjs-poc2-fork.git'; // Replace with your GitHub repository URL

const currentDirectory = process.cwd();
const destination = path.join(currentDirectory, 'my-app');

console.log('Cloning the repository...');
gitClone(repository, destination, {}, (error) => {
    if (error) {
        console.error('An error occurred while cloning the repository:', error);
    } else {
        console.log('Repository cloned successfully!');

        console.log('Installing dependencies...');
        try {
            execSync(`cd ${destination} && npm install`, { stdio: 'inherit' });
            console.log('Dependencies installed successfully!');
        } catch (error) {
            console.error('An error occurred while installing dependencies:', error);
            return;
        }

        console.log('Installation completed!');
        console.log(`To start your app, navigate to the '${destination}' directory and run 'npm run dev'.`);
    }
});
